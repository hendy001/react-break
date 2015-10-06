var webpack = require('webpack');
var path = require('path');

var ENV = process.env.NODE_ENV;

module.exports = {
  entry: {
    demo0: ['babel-core/polyfill', './demos/demo0/index.jsx']
  },
  contentBase: './demos',
  output: {
    filename: '[name]/bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'demos')
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules|build/
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ENV === 'development'
          ? ['react-hot', 'babel']
          : ['babel'],
        exclude: /node_modules|build/
      }
    ]
  },
  resolve: {
    root: [path.resolve('./src')],
    extensions: ['', '.js', '.jsx']
  },
  plugins: ENV === 'development'
    ? [new webpack.HotModuleReplacementPlugin()]
    : [],
  eslint: {configFile: '.eslintrc'}
};
