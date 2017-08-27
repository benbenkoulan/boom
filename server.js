const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
const serialize = require('node-serialize');
const LRU = require('lru-cache')

const isDev = (process.env.NODE_ENV === 'development');

let app = new express();
app.use(compression());//采用gzip压缩，也可以通过nginx压缩
let readyPromise,
	bundleRenderer,
	template = fs.readFileSync(path.join(path.resolve('./src'), 'index.html'), 'utf-8');
const { createBundleRenderer } = require('vue-server-renderer');

const createRenderer = (bundle, options) => {
	return createBundleRenderer(bundle, Object.assign(options, { template, runInNewContext: false, cache: LRU({ max: 10000, maxAge: 1000 * 60 * 60 }) }));
}

const render = (req, res) => {
	res.type('.html');
	let context = { url: req.url };
	let stream = bundleRenderer.renderToStream(context);
	let response = '';
	stream.once('data', data => {

	});

	stream.on('data', data => {
		response += data.toString();
	});

	stream.on('end', () => {
		res.end(`<script>window.__INITIAL_STATE__=
			${serialize.serialize(context.initialState)}
		</script>` + response);
	});

	stream.on('error', error => {
		console.log('----------------------');
		console.log(error);
		console.log('----------------------');
	});
}

if(isDev){//开发环境使用webpack-dev-server
	readyPromise = require('./build/setup-dev-server')(app, (bundle, options) => {
		bundleRenderer = createRenderer(bundle, options);
	});
} else {//读取磁盘文件
	let distPath = path.resolve('./dist');
	//托管静态资源,不通过express
	app.use('/img', express.static(path.join(distPath, 'img')));
	app.use('/css', express.static(path.join(distPath, 'css')));
	app.use('/js', express.static(path.join(distPath, 'js')));


	const bundle = require('../dist/vue-ssr-server-bundle.json');
	const clientManifest = require('../dist/vue-ssr-client-manifest.json');
	bundleRenderer = createRenderer(bundle, {
		clientManifest
	});
}

app.get(/[^json]$/, isDev ? (req, res) => {
	readyPromise.then(() => {
		render(req, res);
	});
} : render);

app.get(/.json$/, (req, res) => {
	res.type('.html');
	let basePath = isDev ? './' : './dist';
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