import Vue from 'vue';
import ajax from './util/ajax';


global.G = { ajax, Vue };

export default context => {
	var initialState = context.initialState = {};
	let url = context.url;
	url = url.split('?')[0]
	let filePath = url.replace(/^\//, '').replace(/.(htm|html)$/, '') || 'index';//首页
	let page = require('./page/' + filePath + '/index');
	context.title = page.title || 'Boom';
	let vm = new Vue(page);
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