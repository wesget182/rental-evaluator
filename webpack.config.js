const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

console.log(' ## path ##');
console.log(__dirname + '/index.html');
const htmlPlugin = new HtmlWebPackPlugin({
  // path to build index.html in /build
  template: './index.html',
});

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: ['./index.js'],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|browser_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.png|svg|jpg|otf|gif$/,
        use: 'file-loader?name=./images/[name].[ext]'
      },
      {
        // test: /\.css$/,
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
        
      },
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    host: 'localhost', 
    port: 8080,
    contentBase: path.resolve(__dirname, '/dist'),
    compress: true,
    publicPath: '/',
    headers: { 'Access-Control-Allow-Origin': '*' },
    // fallback to root for other urls
    historyApiFallback: true,

    //setup proxy to access BE server
    proxy: {
      '/':{
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true
      },
      '/clickMe' : 'http://localhost:3000/clickMe'
    }
  }
};