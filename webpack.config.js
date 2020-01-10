// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

// const plugins = [new BundleAnalyzerPlugin()];

// export default plugins;
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/"
    },
    plugins: [new BundleAnalyzerPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
};
