const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseConfig, {
  	target: 'node',
    devtool: '#source-map',
	entry: './src/server-main.js',
	output: {
		filename: 'server-bundle.js', 
		libraryTarget: 'commonjs2'	// This tells the server bundle to use Node-style exports
	},
	plugins: [
	new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
	new VueSSRServerPlugin()],
});