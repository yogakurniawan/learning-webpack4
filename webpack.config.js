const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // }
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin([
      'dist'
    ]),
    new ExtractTextPlugin('styles.css')
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
	// optimization: {
	// 	occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
	// }
};