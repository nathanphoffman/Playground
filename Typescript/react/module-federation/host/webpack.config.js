const HtmlWebpackPlugin = require("html-webpack-plugin");
const { container } = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devServer: { port: 3000 },
  output: { publicPath: "auto" },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  module: { rules: [{ test: /\.tsx?$/, loader: "swc-loader", options: { jsc: { parser: { syntax: "typescript", tsx: true }, transform: { react: { runtime: "automatic" } } } } }] },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "host",
      remotes: { remote: "remote@http://localhost:3001/remoteEntry.js" }, // where to load the other app from at runtime
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({ template: "./index.html" }),
  ],
};
