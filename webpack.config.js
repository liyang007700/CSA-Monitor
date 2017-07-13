const webpack = require('webpack');
const path = require('path');

/*const env = process.env.NODE_ENV
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
	disable: process.env.NODE_ENV === "development"
});
console.log(process.env.NODE_ENV);*/

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname),
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
				/*,不能minimize,否则把component的tag的“”都给干掉了，直接父元素到子元素的prop断掉!
				options: {
					minimize: true
				}*/
			}],
		}, {
			test: /\.less$/,
			use: ['style-loader', 'css-loader', 'less-loader']
				/*
				use: extractLess.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "less-loader"
					}],
					// use style-loader in development
					fallback: "style-loader"
				})*/
		}, {
			test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
			loader: "file-loader"
		}, {
			test: /\.css$/,
			/*
			use: env === 'production' ?
				ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				}) : ['style-loader', 'css-loader']*/
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.json$/,
			use: ['json-loader']
		}]
	}
	/*,
	plugins: env === 'production' ? [
		new ExtractTextPlugin({
			filename: '[name].css'
		})
	] : []*/
}
