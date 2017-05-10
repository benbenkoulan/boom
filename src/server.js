const express = require('express');
const compression = require('compression');
const webpack = require('webpack');
const config = require('./build/webpack.config');
const path = require('path');
const fs = require('fs');
const serialize = require('node-serialize');

const isDev = (process.env.NODE_ENV === 'development');

let app = new express();
app.use(compression());//采用gzip压缩，也可以通过nginx压缩
let compiler = webpack(config);
let html = '';
if(isDev){//开发环境使用webpack-dev-server
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

// app.get(/.(html?)$/, (req, res) => {
// 	res.type('.html');
// 	res.send(html);
// });
	
const createApp = require('../dist/js/server-bundle').default;

const render = require('vue-server-renderer').createRenderer({
	template: html
});
app.get(/[^json]$/, (req, res) => {
	res.type('.html');
	console.log(req.url);
	let context = { url: req.url };
	var app = createApp(context);
	if(app instanceof Promise){
		app.then(vm => {
			render.renderToString(vm, (err, html) => {
				if(err){
					console.log('-----------------------');
					console.log(err);
					console.log('-----------------------');
				}
				res.end(`<script>window.__INITIAL_STATE__=
					${serialize.serialize(context.initialState)}
				</script>` + html);
			})
		});
	} else {
		render.renderToString(app, (err, html) => {
			res.end(html);
		})
	}
});

app.get(/.json$/, (req, res) => {
	res.type('.html');
	let basePath = isDev ? './' : '../dist';
	basePath = path.resolve(basePath);
	let filePath = path.join(basePath, req.path);
	if(fs.existsSync(filePath)){
		res.send(fs.readFileSync(filePath));	
	} else {
		res.send('not found');
	}
});

app.listen(3000, () => {
	console.log('server started,listening port 3000');
});