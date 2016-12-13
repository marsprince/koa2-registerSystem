var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: {
        main:['./public/app.js']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new ExtractTextPlugin('app.css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, '../public'),
        },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]','sass')
            },
        ]
    },
};
