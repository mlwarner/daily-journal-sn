const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'cheap-source-map',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    static: {
      directory: path.resolve(__dirname, 'app')
    }
  },
  entry: [
    path.resolve(__dirname, 'app/main.js'),
    //path.resolve(__dirname, 'app/stylesheets/main.scss'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: './dist.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/index.html')
    })
  ]
};
