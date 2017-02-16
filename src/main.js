import common from './css/common.css';
import vue from 'vue';

let win = window,
	doc = document,
	body = doc.body,
	loc = win.location,
	vm;
doc.addEventListener('click', e => {
	let target = e.target;
	if(target.nodeName.toUpperCase() === 'A'){
		e.preventDefault();
		route(target.getAttribute('href'));
	}
});

win.addEventListener('popstate', () => {
	route();
});

let route = (url => {
	url = url || loc.pathname;
	if(vm) vm.$destroy();
	let filePath = url.replace(/^\//, '').replace(/.htm$/, '') || 'index';
	System.import('./page/' + filePath + '/index').then(page => {
		vm = new vue(page);
		vm.$mount('.page');
	}).catch(e => {
		console.log(e);
	});
	if(url != loc.pathname){
		history.pushState(null, null, url);
	}
});

route();