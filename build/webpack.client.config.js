const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const baseConfig = require('./webpack.base.config');
const webpackMerge = require('webpack-merge');

const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const isDev = process.env.NODE_ENV === 'development';


let plugins = [new CommonsChunkPlugin({ name: 'vender', minChunks: module => {
                   return module.context && module.context.indexOf('node_modules') !== -1;	// this assumes your vendor imports exist in the node_modules directory
				} }),
				new CommonsChunkPlugin({ name: 'manifest'}),	//将运行时代码单独打包
				new InlineManifestWebpackPlugin({ name: 'webpackManifest' }),//将运行时代码内嵌到HTML中，减少请求
				new VueSSRClientPlugin()
			];
let vender = ['vue', 'core-js/shim'];

let clientConfig = webpackMerge(baseConfig, {
	entry: {
		main: ['./src/client-main.js'],
		vender
	},
	plugins,
	devtool: '#source-map'
});
console.log(clientConfig);

module.exports = clientConfig;