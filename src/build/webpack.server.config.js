const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseConfig, {
  	devtool: '#source-map',
	target: 'node',
    entry: './server-main.js',
	output: {
		filename: 'server-bundle.js', 
		libraryTarget: 'commonjs2'	// This tells the server bundle to use Node-style exports
	},
	plugins: [new VueSSRServerPlugin()],
});