const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    devServer : {
        port: 3001
    },
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:  "babel-loader"
            },
            {
                test: /\.(scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "app.bundle.js"
    },
    plugins: [new htmlWebpackPlugin({template: './src/index.html'})]
}

module.exports = config;