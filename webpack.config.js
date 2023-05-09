const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // CSS rules
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
      title: "Webpack_starter_copy",
    }),
  ],

  devServer: {
    // static: false, // {
    // //   directory: path.join(__dirname, 'public'),
    // // },
    // compress: true,
    port: 9000,
  },
};
