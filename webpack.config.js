const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {

    devtool: false,

    entry: {
        style: './css/main.scss',
        main: './js/main.ts'
    },

    output: {
        path: path.resolve(__dirname, 'wwwroot', 'dist'),
        filename: 'bundles/[name].js',
        publicPath: '/dist/',
        clean: true,
    },

    watchOptions: {
        ignored: [ '/node_modules/' ]
    },

    resolve: {
        extensions: [".js", ".ts", ".css"],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // Extract into separate .css file
                    },
                    {
                        loader: 'css-loader', // Translates CSS into CommonJS modules
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                quietDeps: false,
                            }
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            filename: '../../Pages/Shared/Bundles/[name].cshtml',
            template: './js/bundletemplate.ejs',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            //ignoreOrder: false,
        }),
    ],

    stats: {
        logging: 'verbose'
    }
};
