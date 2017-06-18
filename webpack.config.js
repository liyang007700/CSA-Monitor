const webpack = require('webpack');
const path = require('path');
const env = process.env.NODE_ENV

const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'app.bundle.js'
	},
	module: {
		// webpack 把每个文件(.css, .html, .scss, .jpg, etc.) 都作为模块处理。然而 webpack 只理解 JavaScript。
		/*
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.html$/,
			loader: "html-loader"
		}]*/
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		}, {
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: {
					minimize: true
				}
			}],
		}, {
			test: /\.less$/,
			use: env === 'production' ?
				ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader']
				}) : ['style-loader', 'css-loader', 'less-loader']
		}, {
			test: /\.css$/,
			use: env === 'production' ?
				ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				}) : ['style-loader', 'css-loader']
		}, {
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			loader: 'url-loader',
			options: {
				limit: 10000
			}
		}]
	},
	plugins: env === 'production' ? [
		new ExtractTextPlugin({
			filename: '[name].css'
		})
	] : []
}
