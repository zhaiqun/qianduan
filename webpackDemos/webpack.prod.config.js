const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const devMode = process.env.NODE_ENV !== 'production'; //
// console.log(process.env.NODE_ENV, devMode);


let merge = require('webpack-merge');
let commonConfig = require('./webpack.common.config');
let prodConfig = {
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.(sc|c|sa)ss$/,
                // style-loader
                use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }

                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [require('autoprefixer')()]

                        }
                    }, {

                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }

                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/, // 加快编译速度，不包含node_modules文件夹内容
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    plugins: [

        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id][hash].css'
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})

        ]
    },


}

module.exports = merge(commonConfig, prodConfig)