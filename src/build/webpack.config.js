const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const isDev = process.env.NODE_ENV === 'development';

const chunkhash = 'chunkhash';
const hash = 'hash';

let plugins = [new CommonsChunkPlugin({ name: 'vender', minChunks: module => {
					// this assumes your vendor imports exist in the node_modules directory
                   return module.context && module.context.indexOf('node_modules') !== -1;
				} }),
				new CommonsChunkPlugin({ name: 'manifest'}),	//将运行时代码单独打包
				new InlineManifestWebpackPlugin({ name: 'webpackManifest' }),//将运行时代码内嵌到HTML中，减少请求
				new ExtractTextPlugin('css/style.[contenthash:8].css'),
				new webpack.DefinePlugin({
					'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
				}),
				new VueSSRClientPlugin()
			];
let main = ['./main.js'],
	vender = ['vue', 'core-js/shim'];
//vender.push('vuex');
if(!isDev){
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
		  warnings: false
		}
	}));
}

module.exports = {
	entry: {
		main, vender
	},
	output: {
		publicPath: '/',
		path: path.resolve('../dist'),
		filename: `js/[${isDev ? hash : chunkhash}:8].[name].js`,	//热模块替换不支持chunkhash(每次文件变化才会变)，开发时使用hash(每次编译都会变化)
		chunkFilename: 'js/module/[chunkhash:8].js'
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
			            }),
			            preserveWhitespace: false
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
	},
	devtool: '#source-map'
}