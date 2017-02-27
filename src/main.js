import common from './css/style.css';
import vue from 'vue';
import underscore from 'underscore';
import shim from 'core-js/shim';

let win = window,
	doc = document,
	body = doc.body,
	loc = win.location,
	vm;
doc.addEventListener('click', e => {
	let target = e.target;
	let a = getA(target);
	if(a){
		e.preventDefault();
		route(a.getAttribute('href'));
	}
});

let getA = (target => {
	let nodeName = target.nodeName.toUpperCase();
	if(nodeName !== 'BODY'){
		if(nodeName === 'A'){
			return target;
		} else {
			return getA(target.parentNode)
		}
	}
	return null;
})

win.addEventListener('popstate', () => {
	route();
});
//路由
let route = (url => {
	url = url || loc.pathname;
	if(vm) vm.$destroy();
	let filePath = url.replace(/^\//, '').replace(/.htm$/, '') || 'index';//首页
	System.import('./page/' + filePath + '/index').then(page => {
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
		history.pushState(null, null, url);
	}
});

route();