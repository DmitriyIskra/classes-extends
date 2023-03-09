const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader, // затем этим
          'css-loader', // загрузщики нужно указывать в обратном порядке, сначала обработается этим загрузщиком
        ],
      },
    ],
  },
  plugins: [ // Здесь плагины к загрузщикам
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCSSExtractPlugin(),
  ],
};
