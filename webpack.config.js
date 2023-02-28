const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// Questions for Chris Why the .BundleAnalyzerPlugin right after require is this invoking the package?
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    iife: true,
  },
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/, //Regular expression
        exclude: /(node_modules|bower_components)/, //excluded node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], //Preset used for env setup
          },
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "public"),
    port: 9000,
  },
};

// TODO:
// In the webpack config file, change the output js to an IIFE.
// BONUS: change the output js version to es5 /
// compatible with IE 11. Hint use 'babel-loader'.

//Chris Questions
// Is the order of the rules use array important?

// many entries can help with the code splitting
// code splitting: break code into smaller chunks

// contentBase
// Also contentBase for dev server is deprecated and thus change with the word static instead.
