const HtmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './frontend/src/index.html',
  filename: './index.html'
})

module.exports = {
  entry: "./frontend/src/index.js",
  output: {
    path: path.resolve('./frontend/dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          require.resolve('sass-loader')
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};