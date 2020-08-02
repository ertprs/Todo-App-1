const webpack = require('webpack')
const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve('public'),
        filename: 'app.js'
    },
    devServer: {
        contentBase: './public',
        port: 8000
    },
    plugins: [
        new miniCssExtractPlugin({filename: 'style.css'})
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                use: { loader: 'file-loader'}
            }
        ]
    }
}