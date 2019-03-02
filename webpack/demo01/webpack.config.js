const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 3002,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            inject: true,
            hash: true,
            chunksSortMode: 'none' //如使用webpack4将该配置项设置为'none'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};