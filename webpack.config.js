const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]';
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: ['./src/index.jsx'],
    output:{
        filename: 'app.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },

    module: {
          rules: [

              {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
              },

              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
              },

              {
                test: /\.css$/,
                use: [
                  "style-loader",
                  `css-loader?${cssModules}`
                ]
              }
          ]
      },


    devServer:{
        host: '0.0.0.0',
        port: 8080,
        inline: true,
        historyApiFallback: true

    },

    plugins:[
        new HtmlWebpackPlugin({template: './src/assets/index.html'}),
        new ExtractTextPlugin('style.css', {allChunks: true})
    ]
}
