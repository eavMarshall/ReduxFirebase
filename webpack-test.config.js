var config = {
  entry: './src/Tests/index.js',

  output: {
    path: __dirname,
    filename: './src/Tests/public/testBundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
}

module.exports = config;
