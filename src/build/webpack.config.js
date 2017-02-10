const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

module.exports = {
	entry: {
		main : ['./main.js'],
		vender : ['underscore', 'babel-polyfill']
	},
	output: {
		filename : '[chunkhash:8].[name].js',
		path : path.resolve('../dist'),
		chunkFilename : 'js/module/[chunkhash:8].js'
	},
	plugins: [ 
		new CommonsChunkPlugin({ name: 'vender', minChunks: Infinity }),
		new CommonsChunkPlugin({ name: 'manifest' }),
		new HtmlWebpackPlugin({ template: './index.html', filename: 'index.html', chunks : ['main', 'vender'] }),
		new InlineManifestWebpackPlugin({ name: 'webpackManifest' }),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
		      warnings: false
		    }
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	resolve: {
		alias: {
			util: path.resolve('./util')
		},
		extensions: ['.js']
	},
	devtool: 'inline-source-map'
}