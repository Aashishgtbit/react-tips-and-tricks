const path = require("path");

// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            title: "Products",
            template: "public/index.html",
            filename: 'index.html'
        })
    ],

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
