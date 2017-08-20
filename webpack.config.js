const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'diskdb-web.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    compress: true,
    port: 9000
  }
};
