const webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: {
		path: './dist',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		},{
			test: /\.html$/,
            loader: "html-loader"
		}]
	},
	resolve: {
	  alias: {
	    'vue$': 'vue/dist/vue.common.js'
	  }
	}
}