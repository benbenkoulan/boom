const path = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';


let plugins = [new webpack.DefinePlugin({
	'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
})];

if(isProduction) plugins.push(new ExtractTextWebpackPlugin('css/style.[contenthash:8].css'));

if(isProduction) plugins.push(new webpack.optimize.UglifyJsPlugin({	compress: { warnings: false } }));

module.exports = {
	output: {
		publicPath: '/',
		path: path.resolve('./dist'),
		filename: `js/[${isProduction ? 'chunkhash' : 'hash'}:8].[name].js`//热模块替换不支持chunkhash(每次文件变化才会变)，开发时使用hash(每次编译都会变化)
	},
	module: {
		rules: [
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
					exrtactCSS: isProduction,
		            preserveWhitespace: false,
		            postcss: [
					    require('autoprefixer')({
					      browsers: ['last 3 versions']
					    })
					]
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
		        use: isProduction ? ExtractTextWebpackPlugin.extract({
		        	use: ['css-loader?minimize', 'postcss-loader'],
		        	fallback: 'vue-style-loader'
		        }) : ['vue-style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.jpe?g|png|gif|svg/,
				exclude: /node_modules/,
				loader: 'url-loader',
				options: {
					limit: 3000
				}
			}
		]
	},
	plugins,
	resolve: {
		alias: {
			api: path.resolve('./src/api'),
			util: path.resolve('./src/util'),
			img: path.resolve('./src/img'),
			com: path.resolve('./src/com'),
			css: path.resolve('./src/css'),
			vue$: path.resolve('./lib/vue.runtime.esm'),
			views: path.resolve('./src/views')
		},
		extensions: ['.js', '.vue', '.css']
	}
}