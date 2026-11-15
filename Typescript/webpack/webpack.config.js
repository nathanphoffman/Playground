export default {
  mode: "development",
  entry: "./src/index.ts",
  output: { filename: "bundle.js", path: new URL("./dist", import.meta.url).pathname },
  resolve: { extensions: [".ts", ".js"] },
  module: { rules: [{ test: /\.ts$/, loader: "swc-loader", options: { jsc: { parser: { syntax: "typescript" } } } }] },
};
