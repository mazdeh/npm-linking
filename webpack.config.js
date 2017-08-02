const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(`${__dirname}/dist`),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: false,
        },
      },
      {
        test: /\.jsx?/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
    ],
  }
};
