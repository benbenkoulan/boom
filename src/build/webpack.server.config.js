const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

const isDev = process.env.NODE_ENV === 'development';

let plugins = [new webpack.DefinePlugin({
					'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
				}),
				new VueSSRServerPlugin()
			];
if(!isDev){
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
		  warnings: false
		}
	}));
}
module.exports = {
  	devtool: '#source-map',
	target: 'node',
    entry: './server-main.js',
	output: {
		publicPath: '/',
		path: path.resolve('../dist/'),
		filename: 'server-bundle.js', 
		// This tells the server bundle to use Node-style exports
		libraryTarget: 'commonjs2'
	},
	plugins,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.vue$/,
				use: [{
					loader: 'vue-loader',
					options:{
						loader: ExtractTextPlugin.extract({
			              use: ['css-loader', 'postcss-loader'],
			              fallback: 'vue-style-loader'
			            })
					}
				}]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'postcss-loader']})
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				exclude: /node_modules/,
				loader: 'url-loader',
				options: {
					limit: 2000,//小文件直接内嵌到页面上，减少请求
					name: '[path][name].[hash:8].[ext]'
				}
			}
		]
	},
	resolve: {
		alias: {
			util: path.resolve('./util'),
			img: path.resolve('./img'),
			com: path.resolve('./com'),
		},
		extensions: ['.js', '.css', '.vue']
	}
}