import func from 'util/func';
import { throttle } from 'underscore';
import common from './css/common.css';
import vue from 'vue';

/*let arr = [ {name: 'liben', sex: 'male'}, {name: 'jinxue', sex: 'female'} ];
arr = arr.map(person => {
	person.name += '--human';
	return person;
});

let queryDiv = document.querySelector.partial('div');*/

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
	route(loc.pathname);
});

let route = (url => {
	if(vm) vm.$destroy();
	let filePath = url.replace(/^\//, '').replace(/.htm$/, '');
	System.import('./page/' + filePath + '/index').then(page => {
		vm = new vue(page);
		vm.$mount('.page');
	}).catch(e => {
		console.log(e);
	});
	history.pushState(null, null, url);
});

