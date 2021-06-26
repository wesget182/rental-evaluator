const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

console.log(' ## path ##');
console.log(__dirname + '/index.html');
const htmlPlugin = new HtmlWebPackPlugin({
  // path to build index.html in /build
  template: './index.html',
});

module.exports = {
  devtool: 'eval-source-map',
  mode: 'production',
  entry: ['./index.js'],

  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        // test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.png|svg|jpg|otf|gif$/,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'svg-url-loader',
            options: {
              limit: 1000,
            },
          },
        ],
      },
      {
        // test: /\.css$/,
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new webpack.HotModuleReplacementPlugin({
      // Options...
    }),
  ],
  devServer: {
    // host: 'localhost',
    // port: 8080,
    // contentBase: path.resolve(__dirname, '/dist'),
    // compress: true,
    publicPath: '/',
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    // fallback to root for other urls
    historyApiFallback: true,

    //setup proxy to access BE server
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
