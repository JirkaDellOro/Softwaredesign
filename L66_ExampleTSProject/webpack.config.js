module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  target: 'node',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts"]
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: "ts-loader" },
    ]
  }
};