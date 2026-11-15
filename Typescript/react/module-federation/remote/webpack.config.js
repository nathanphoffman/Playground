const HtmlWebpackPlugin = require("html-webpack-plugin");
const { container } = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devServer: { port: 3001, headers: { "Access-Control-Allow-Origin": "*" } },
  output: { publicPath: "auto" },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  module: { rules: [{ test: /\.tsx?$/, loader: "swc-loader", options: { jsc: { parser: { syntax: "typescript", tsx: true }, transform: { react: { runtime: "automatic" } } } } }] },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: { "./Button": "./src/Button.tsx" }, // what other apps may import
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({ template: "./index.html" }),
  ],
};
