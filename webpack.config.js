const path = require('path');
const webpack = require('webpack');
const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin')

module.exports = {
  entry: [ 'babel-polyfill', './index.js' ],
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'index.js',
    library: 'react-chat-widget',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [
              path.resolve(__dirname, 'src/sass/')
            ]
          }
        }
      ]
    }, {
      test: /\.(jpg|png|gif|svg)$/,
      use: {
        loader: 'url-loader'
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new BabelMinifyWebpackPlugin({
      keepFnName: true,
      keepClassName: true,
      removeConsole: true
    }, {
      topLevel: true,
      comments: false,
      sourceMap: null
    })
  ]
};
