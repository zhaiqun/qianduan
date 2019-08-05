const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'; //
console.log(process.env.NODE_ENV, devMode);
let commonConfig = {

    entry: './src/index.js',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/, // 加快编译速度，不包含node_modules文件夹内容
                use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    // {
                    //     loader: "eslint-loader",
                    //     options: {
                    //         formatter: require("eslint/lib/cli-engine/formatters/stylish"),

                    //         // eslint options (if necessary)
                    //         fix: true
                    //     }
                    // }
                ]
            },

            {
                test: /\.(jpg|png)$/,
                use: [{
                        loader: 'url-loader', // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]


            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'AICODER 全栈线下实习', // 默认值：Webpack App
            filename: 'main.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'src/index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true // 移除属性的引号
            }
        })
    ],
    // plugins: {


    //     new webpack.NamedModulesPlugin(), // 更容易查看(patch)的依赖
    //     new webpack.HotModuleReplacementPlugin() // 替换插件
    // }
}

module.exports = commonConfig;