var config = {
  entry: './src/index.js',

  output: {
    path: __dirname,
    filename: './public/js/bundle.js',
  },

  devServer: {
    publicPath: "/",
    contentBase: "./public",
    port: 8080,
    inline: true
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
