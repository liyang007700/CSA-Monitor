const webpack = require('webpack');
const webpackConfig = require("./webpack.config.js");

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: ['./src/**/*.js']
		},

		webpack: {
			options: webpackConfig,
			dev: {
				devtool: '#eval-source-map'
			},
			prod: {
				devtool: '#source-map',
				plugins: [
			  		new webpack.optimize.UglifyJsPlugin({
			  	  		compress: {
			  	  			warnings: false,
			  	  		},
			  	  		output: {
			  	  			comments: false,
			  	  		},
			  	  	})
			  	]
			}
		},

		watch: {
			scripts: {
				files: ['src/**/*.js', 'src/**/*.html'],
				tasks: ['jshint', 'webpack:dev'],
				options: {
					spawn: false,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['watch']);
};