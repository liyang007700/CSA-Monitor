const webpack = require('webpack');
const webpackConfig = require("./webpack.config.js");

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: ['./src/**/*.js']
		},
		
		less: {
			dev: {
				options: {
					paths: ["style"]
				},
			    files: {
			    	'dist/app.css': 'style/app.less'
			    }
			}
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
				files: ['src/**/*.js', 'src/**/*.html', 'style/**/*.less'],
				tasks: ['jshint', 'less:dev', 'webpack:dev'],
				options: {
					spawn: false,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('build', ['watch']);
};