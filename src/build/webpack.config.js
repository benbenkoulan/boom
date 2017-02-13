const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

module.exports = {
	entry: {
		main: ['./main.js'],
		vender: ['underscore', 'babel-polyfill', 'vue']
	},
	output: {
		filename: '[chunkhash:8].[name].js',
		path: path.resolve('../dist'),
		publicPath: '/',
		chunkFilename: 'js/module/[chunkhash:8].js'
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
		}),
		new ExtractTextPlugin('css/style.[contenthash:8].css')
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
			},
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader',
				options: {
					loaders: {//将vue文件中的style提取到文件中
			            css: ExtractTextPlugin.extract({
			              loader: 'css-loader',
			              fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
			            })
			        }
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader',
					fallbackLoader: 'style-loader'
				})
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				exclude: /node_modules/,
				loader: 'file-loader',
				query: {
					limit: 20000,
					name: '[path][name].[hash:8].[ext]'
				}
			}
		]
	},
	resolve: {
		alias: {
			util: path.resolve('./util'),
			img: path.resolve('./img'),
			template: path.resolve('./template')
		},
		extensions: ['.js', '.css', '.vue']
	},
	devtool: 'inline-source-map'
}