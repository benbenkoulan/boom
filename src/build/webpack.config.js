const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';//添加到每个入口文件中

const isDev = process.env.NODE_ENV === 'development';

const chunkhash = 'chunkhash';
const hash = 'hash';

let plugins = [new CommonsChunkPlugin({ name: 'vender', minChunks: Infinity }),
				new CommonsChunkPlugin({ name: 'manifest', chunks: ['vendor']}),	//将运行时代码单独打包
				new HtmlWebpackPlugin({ template: './index.html', 
					filename: 'index.html', 
					chunks : ['main', 'vender'], 
			        chunksSortMode: 'dependency' }),
				new InlineManifestWebpackPlugin({ name: 'webpackManifest' }),//将运行时代码内嵌到HTML中，减少请求
				new ExtractTextPlugin('css/style.[contenthash:8].css'),
				new webpack.DefinePlugin({
					'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
				})
			];
let main = ['./main.js'],
	vender = ['underscore', 'vue'];
if(isDev){
	plugins.push.call(plugins, new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin());//引入热模块替换插件
	main.push(hotMiddlewareScript);
	vender.push(hotMiddlewareScript);
} else {
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress: {
		  warnings: false
		}
	}));
}

module.exports = {
	entry: {
		main: main,
		vender: vender
	},
	output: {
		publicPath: '/',
		path: path.resolve('../dist'),
		filename: `js/[${isDev ? hash : chunkhash}:8].[name].js`,	//热模块替换不支持chunkhash(每次文件变化才会变)，开发时使用hash(每次编译都会变化)
		chunkFilename: 'js/module/[chunkhash:8].js'
	},
	plugins: plugins,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader',
				options: {
					loaders: {//将vue文件中的style提取到文件中
			            css: ExtractTextPlugin.extract({
			              loader: 'css-loader',
			              fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
			            })
			        }
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader',
					fallback: 'style-loader'
				})
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				exclude: /node_modules/,
				loader: 'url-loader',
				query: {
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
			com: path.resolve('./page/com'),
		},
		extensions: ['.js', '.css', '.vue']
	},
	devtool: '#source-map'
}