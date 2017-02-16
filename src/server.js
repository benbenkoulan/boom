const express = require('express');
const webpack = require('webpack');
const config = require('./build/webpack.config');
const path = require('path');
const fs = require('fs');

const isDev = (process.env.NODE_ENV === 'development');

let app = new express();
let compiler = webpack(config);
let html = '';
if(isDev){
	const devMidlleware = require('webpack-dev-middleware')(compiler, {
		publicPath: '/'	//和配置文件保持一致
	});
	compiler.plugin('done', () => {
		let fs = devMidlleware.fileSystem;	//读取内存文件
		let indexPath = path.join(config.output.path, 'index.html');
		html = fs.readFileSync(indexPath, 'utf-8');
	});
	app.use(devMidlleware);
	app.use(require('webpack-hot-middleware')(compiler));
} else {//读取磁盘文件
	let distPath = path.resolve('../dist');
	let indexPath = path.join(distPath, 'index.html');
	html = fs.readFileSync(indexPath, 'utf-8');
	//托管静态资源,不走express
	app.use('/img', express.static(path.join(distPath, 'img')));
	app.use('/css', express.static(path.join(distPath, 'css')));
	app.use('/js', express.static(path.join(distPath, 'js')));
}

app.get(/.(html?)$/, (req, res) => {
	res.type('.html');
	res.send(html);
});

app.listen(3000, () => {
	console.log('server started,listening port 3000');
});