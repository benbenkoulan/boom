import Vue from 'vue';
import ajax from './util/ajax';
import mock from './util/mock';
import createApp from './app.js';

global.G = { ajax, Vue };

Vue.config.errorHandler = (err, vm, info) => {
	console.log('---------errorHandler---------------start---');
	console.log(err);
	console.log(info);
	console.log('---------errorHandler---------------end-----');
}

export default context => {
	/*var initialState = context.initialState = {};
	let url = context.url;
	url = url.split('?')[0]
	let filePath = url.replace(/^\//, '').replace(/.(htm|html)$/, '') || 'index';//首页
	let page = require('./page/' + filePath + '/index');
	context.title = page.title || 'Boom';
	console.log('-----before---new---------');*/
	/*if(vm.getData){
		return new Promise((reslove, reject) => {
			let getDataPromise = vm.getData();
			if(getDataPromise instanceof Promise){
				getDataPromise.then(data => {
					initialState.data = data;
					reslove(vm);
				}).catch(err => {
					reject(err);
				});
			} else {
				reslove(vm);
			}
		});
	} else {
		return vm;
	}*/
	return new Promise((reslove, reject) => {
		const { app, router, store } = createApp();
		router.push({path: context.url});
		console.log(context.url);
		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents();
			Promise.all(matchedComponents.map(component => {
				context.title = component.title || 'BOOM';
				if(component.fetchData) return component.fetchData(store);
			})).then(data => {
				context.state = store.state;
				reslove(app);	
			});
		});
	});
}