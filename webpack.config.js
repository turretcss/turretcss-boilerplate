var path = require('path');
var webpack = require('webpack');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var flexibility = require('postcss-flexibility');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './scripts/main.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new BrowserSyncPlugin({
      proxy: 'dev.template'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: /(node_modules)/,
        include: [
          path.join(__dirname, 'scripts'),
        ]
      }, 
      {
        test: /\.json$/,
        include: path.join(__dirname, 'node_modules'),
        loader: 'json',
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, 'styles'),
        loader: ExtractTextPlugin.extract('css-loader!postcss-loader!less-loader'),
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?/,
        loader: 'url?limit=8000&name=[name].[ext]'
      }
    ],
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9']
      }),
      flexibility
    ];
  }
};