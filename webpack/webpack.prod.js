/*
 # webpack.config.js
 # Webpack Production Configuration
 */

/*
 # Module Dependencies
 */

require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 # Critical Variables
 */

/*
 # Plugins
 */

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const environmentModePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

const uglifyJSPlugin = new UglifyJSPlugin({
  sourceMap: true,
  uglifyOptions: {
    compress: {
      inline: false
    },
  },
});

const plugins = [];

if (process.env.BUILD_HTML) {
  plugins.push(htmlPlugin);
}

plugins.push(environmentModePlugin);
plugins.push(uglifyJSPlugin);

/*
 # Config
 */

const config = {
  output: {
    path: path.resolve(__dirname, '..', process.env.BUILD_PATH || 'dist'),
    filename: 'main.js',
    publicPath: process.env.PUBLIC_PATH || '/',
  },
  mode: 'production',
  optimization: {
    minimizer: [
      uglifyJSPlugin,
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 2
        },
      },
    },
  },
  plugins,
  /*plugins: [
    environmentModePlugin,
  ],*/
};

/*
 # Module Exports
 */

module.exports = merge(common, config);
