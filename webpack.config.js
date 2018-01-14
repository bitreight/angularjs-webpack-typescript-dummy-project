let path = require('path');

module.exports = {
  entry: './src/app/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};