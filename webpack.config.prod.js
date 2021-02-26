const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "prod"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "prod"),
        port: 8000,
        open: true
    },
    mode: "production",
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
};
