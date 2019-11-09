const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: process.env.production ? '[name].[chunkhash].js' : '[name].[hash].js'
    },
    optimization: {
        minimizer: [ new OptimizeCSSAssetsPlugin({})]
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader',
                    {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // only enable hot in development
                        hmr: process.env.NODE_ENV === 'development',
                        // if hmr does not work, this is a forceful method.
                        reloadAll: true,
                    },
                }, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // only enable hot in development
                        hmr: process.env.NODE_ENV === 'development',
                        // if hmr does not work, this is a forceful method.
                        reloadAll: true,
                    },
                }, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackMd5Hash()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        open: true,
        historyApiFallback:  true,
        hot: true,
        quiet: true,
        clientLogLevel: 'silent'
    }
};