const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./build/webpack.config');

let app = new express();
let compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
	publicPath: '/'
}));
app.listen(3000, () => {
	console.log('listening port 3000');
});