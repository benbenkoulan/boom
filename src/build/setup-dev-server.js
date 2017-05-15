const path = require('path');
const webpack = require('webpack');
const MFS = require('memory-fs');
const clientConfig = require('./webpack.config');
const serverConfig = require('./webpack.server.config');

module.exports = (app, cb) => {
	let clientManifest,
		bundle,
		resolve;

	const readyPromise = new Promise(r => {
		resolve = r;
	});
	const ready = (...args) => {
		resolve();
		cb(...args);
	}
	clientConfig.entry.main.push('webpack-hot-middleware/client');
	clientConfig.entry.vender.push('webpack-hot-middleware/client');
	clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin());//引入热模块替换插件


  	// dev middleware
  	const clientCompiler = webpack(clientConfig);
  	const clientDevMiddleware = require('webpack-dev-middleware')(clientCompiler, {
  		publicPath: clientConfig.output.publicPath,
  		noInfo: true
  	});

  	app.use(clientDevMiddleware);

  	clientCompiler.plugin('done', () => {
  		const fs = clientDevMiddleware.fileSystem;
  		const readFile = file => fs.readFileSync(path.join(clientConfig.output.path, file), 'utf-8');

  		clientManifest = JSON.parse(readFile('vue-ssr-client-manifest.json'));
  		console.log('----clientManifest--------------');
  		if(bundle){
  			try{
  				ready(bundle, {
	  				clientManifest
	  			});
  			} catch(e){
  				console.log(e);
  			}
  		}
  		console.log('----clientManifest-------end-------');
  	});

  	//hot middleware
  	app.use(require('webpack-hot-middleware')(clientCompiler));


  	//watch and update server renderer
  	const serverCompiler = webpack(serverConfig);
  	const mfs = new MFS();
  	serverCompiler.outputFileSystem = mfs;
  	serverCompiler.watch({}, (err, status) => {
  		if(err) {
  			console.log('------------------server--compile--------');
  			console.log(err);
  			console.log('------------------end------server-----compile------');
  			return;
  		}
  		status = status.toJson();
	    status.errors.forEach(err => console.error(err));
	    status.warnings.forEach(err => console.warn(err));
	    const readFile = file => mfs.readFileSync(path.join(clientConfig.output.path, file), 'utf-8');
	    // read bundle generated by vue-ssr-webpack-plugin
	    console.log('------------------------');
	    console.log(path.join(clientConfig.output.path, 'vue-ssr-server-bundle.json'));
    	bundle = JSON.parse(readFile('vue-ssr-server-bundle.json'))
	    console.log('----serverManifest--------------');
	    if(clientManifest){
	    	ready(bundle, {
	    		clientManifest
	    	})
	    }
	    console.log('----serverManifest-----end---------');
  	});
  	return readyPromise;
}