module.exports = {
  entry: "./src/js/App.js",
  output: {
    filename: "out.js"
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 8080
  },
  watch: true,
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  }
}