const webpack = require('webpack');

module.exports = {
  entry: "./src/js/App.js",
  output: { filename: "out.js" },
  devServer: {
    contentBase: './',
    port: 8085,
    inline: true,
    hot: true
  },
  plugins: [

    new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()
  ],
  mode: "development",
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
