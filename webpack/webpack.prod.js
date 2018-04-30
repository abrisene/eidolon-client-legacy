/*
 # webpack.config.js
 # Webpack Production Configuration
 */

/*
 # Module Dependencies
 */

require('dotenv').config();

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 # Critical Variables
 */

/*
 # Plugins
 */

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

/*
 # Config
 */

const config = {
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
  plugins: [
    environmentModePlugin,
  ],
};

/*
 # Module Exports
 */

module.exports = merge(common, config);
