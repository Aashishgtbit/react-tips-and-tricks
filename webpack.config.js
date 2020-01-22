const path = require("path");

// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");

const PATHS = {
    src: path.join(__dirname, "src")
};
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist")
    },

    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             styles: {
    //                 name: "style",
    //                 test: /\.(s*)css$/,
    //                 chunks: "all",
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            title: "Products",
            template: "public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].scss"
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*.scss`, { nodir: true })
        })
    ],

    module: {
        rules: [
            {
                test: /\css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
