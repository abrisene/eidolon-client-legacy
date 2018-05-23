/*
 # webpack.config.js
 # Webpack Development Configuration
 */

/*
 # Module Dependencies
 */

require('dotenv').config();

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

/*
 # Critical Variables
 */

const port = process.env.DEV_PORT || 8080;

/*
 # Plugins
 */

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const environmentModePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development'),
});

const npmInstallPlugin = new NpmInstallPlugin();

/*
 # Config
 */

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port,
    // https: true,
    historyApiFallback: true,
  },
  plugins: [
    htmlPlugin,
    environmentModePlugin,
    // npmInstallPlugin,
  ],
};

/*
 # Module Exports
 */

module.exports = merge(common, config);
