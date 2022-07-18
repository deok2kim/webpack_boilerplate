const path = require("path");

const config = {
  entry: "./src/index.js", // 입구
  output: { // 출구
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      }
    ]
  }
};

module.exports = config;