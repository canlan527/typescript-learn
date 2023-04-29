const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.cjs', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png | jpe?g | gif | svg)$/,
        type: 'asset/resource'
      } 
    ]
  },
  devServer: {
    port: 9095,
    open: true,
    proxy: {
      '/api': {
          target: 'http://localhost:3000',  //接口实际目标地址
          changeOrigin: true  //启动跨域
      }
  }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}