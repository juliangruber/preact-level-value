module.exports = {
  entry: './index.js',
  target: 'electron',
  output: {
    filename: 'build.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    leveldown: true
  }
}
