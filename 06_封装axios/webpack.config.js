const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '/build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.cjs','.json'],
  },
  devServer: {
    port: 9095,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}