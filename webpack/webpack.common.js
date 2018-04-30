/*
 # webpack.config.js
 # Webpack Configuration with Autoprefixer
 */

/*
 # Module Dependencies
 */

require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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


const environmentPlugin = new webpack.DefinePlugin({
  'process.env.APP_NAME': JSON.stringify(process.env.APP_NAME),
  'process.env.API_URLS': JSON.stringify(process.env.API_URLS),
  'process.env.API_KEYS': JSON.stringify(process.env.APP_KEYS),
});

/*
 # Config
 */

const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true
            },
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  precss,
                  autoprefixer,
                ];
              }
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
    ],
  },
  plugins: [
    htmlPlugin,
    environmentPlugin,
  ],
};

/*
 # Module Exports
 */

module.exports = config;
