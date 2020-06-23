const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'none',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js/'),
    filename: 'script.js',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: ['style-loader', 'css-loader', 'sass-loader'],
  //     },
  //   ],
  // },
};
