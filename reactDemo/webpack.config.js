const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    mode: 'development',
    module: {
        rules: [{
                test: /\.js|jsx?$/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     "plugins": [
                         
                    //     ]
                    // }

                },
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: [
                    { loader: 'style-loader' },

                    {
                        loader: 'css-loader',
                        // options: {

                        //     modules: {
                        //         localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        //     },
                        // }
                    }
                ]
            }, {
                test: /\.sass|scss$/,
                use: [{
                    loader: "style-loader",

                }, {
                    loader: "css-loader",

                    options: {

                        modules: {
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    }
                }, {
                    loader: "sass-loader",
                }]
            }

        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'AICODER 全栈线下实习', // 默认值：Webpack App
            filename: 'index.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, './src/index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true // 移除属性的引号
            }
        })
    ], //警告 webpack 的性能提示
    performance: {
        hints: 'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js');
        }
    },
    resolve: {
        extensions: ['.wasm', '.jsx', '.js', '.json'],
        alias: { 'src': path.join(__dirname, "./src") }
    }


}