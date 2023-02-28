const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// Questions for Chris Why the .BundleAnalyzerPlugin right after require is this invoking the package?

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
  devServer: {
    static: path.join(__dirname, "public"),
    port: 9000,
  },
};

//Chris Questions
// Is the order of the rules use array important?

// many entries can help with the code splitting
// code splitting: break code into smaller chunks

// contentBase
// Also contentBase for dev server is deprecated and thus change with the word static instead.
