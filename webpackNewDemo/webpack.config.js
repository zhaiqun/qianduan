const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')

const htmlPlugin = new htmlwebpackplugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})
module.exports = {
    //编译模式，production会压缩js
    mode: "development",

    //打包的入口与出口，若不配置则默认入口src下的index.js  出口默认dist下main.js
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundle.js"
    },
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif$/, use: ['url-loader?limit=100'] },
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
        ]
    }
}