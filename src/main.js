import common from './css/style.css';
import vue from 'vue';
import store from './store';
import shim from 'core-js/shim';
import ajax from 'util/ajax';

let win = window,
	doc = document,
	body = doc.body,
	loc = win.location,
	vm;
win.ajax = ajax;
win.vue = vue;
doc.addEventListener('click', e => {
	let target = e.target;
	let a = getA(target);
	if(a){
		e.preventDefault();
		route(a);
	}
});

//获取A标签
let getA = (target => {
	let nodeName = target.nodeName.toUpperCase();
	if(nodeName !== 'BODY'){
		if(nodeName === 'A'){
			return target;
		} else {
			return !target.parentNode && getA(target.parentNode)
		}
	}
	return null;
});

let getQuery = (node => {
	let search = node.search.replace(/^\?/, '').split(/&+/);
	let query = {};
	search.forEach(s => {
		let param = s.split(/=+/) || [];
		query[param[0]] = param[1];
	});
});

//路由
let route = (node => {
	node = node || loc;
	let url = node.pathname;
	let query = getQuery(node);
	if(vm) vm.$destroy();
	let filePath = url.replace(/^\//, '').replace(/.htm$/, '') || 'index';//首页
	System.import('./page/' + filePath + '/index').then(page => {
		page.store = store;
		page.query = query;
		vm = new vue(page);
		if(vm.getData){
			let getDataPromise = vm.getData();
			if(getDataPromise instanceof Promise){
				getDataPromise.then(() => {
					vm.$mount('.page');
				});
				return;
			}
		}
		vm.$mount('.page');
	}).catch(e => {
		console.log(e);
	});
	if(url != loc.pathname){
		history.pushState(null, null, node.href);
	}
});

win.addEventListener('popstate', () => {
	route();
});

route();