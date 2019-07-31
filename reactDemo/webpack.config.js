const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    mode: 'production',
    module: {
        rules: [
            { test: /\.js|jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css/,
                use: [
                    { loader: 'style-loader' },

                    {
                        loader: 'css-loader',
                        options: {
                            // modules: {
                            //     mode: 'local',
                            //     localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            //     context: path.resolve(__dirname, 'src'),
                            //     hashPrefix: 'my-custom-hash',
                            // },
                            // modules: {
                            //     getLocalIdent: (context, localIdentName, localName, options) => {
                            //         return '[path][name]';
                            //     },
                            // },
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        }
                    }
                ]
            }
            // {
            //     test: /\.js|jsx?$/,
            //     exclude: '/node_modules/',
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env',
            //                 "@babel/preset-react"
            //             ],
            //             plugins: ["@babel/plugin-transform-runtime"]
            //         },
            //     },
            // }
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