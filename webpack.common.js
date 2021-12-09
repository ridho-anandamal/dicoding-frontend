/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8081,
  },
  entry: [
    path.resolve(__dirname, 'src/javascripts/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'production'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
        test: /\.(png|jpg|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/public/'),
        to: path.resolve(__dirname, 'production/'),
      }],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/javascripts/sw.js'),
    }),
  ],
};
