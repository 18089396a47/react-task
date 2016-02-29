require('webpack');

module.exports = {
  entry: {
    app: './app'
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', 'index.js', '.js', '.css']
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader?minimize"
    }, {
      test: /\.js$/,
      loader: "babel-loader",
      query: {
        presets: ['react']
      },
      exclude: /node_modules|bower_components/
    }, {
      test: /\.html/,
      loader: 'file?name=[name].[ext]'
    }]
  }
}
