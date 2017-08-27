import Vue from 'vue';
import ajax from './util/ajax';
import mock from './util/mock';

global.G = { ajax, Vue };

Vue.config.errorHandler = (err, vm, info) => {
	console.log('---------errorHandler---------------start---');
	console.log(err);
	console.log(info);
	console.log('---------errorHandler---------------end-----');
}

export default context => {
	var initialState = context.initialState = {};
	let url = context.url;
	url = url.split('?')[0]
	let filePath = url.replace(/^\//, '').replace(/.(htm|html)$/, '') || 'index';//首页
	let page = require('./page/' + filePath + '/index.vue');
	context.title = page.title || 'Boom';
	console.log('-----before---new---------');
	let vm = new Vue({
		render: h => h(page)
	});
	console.log('-----after---new---------');
	if(vm.getData){
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
	}
	/*page.components = page.components || {};
	page.components.top = top;
	page.components.footerNav = footerNav;*/
}