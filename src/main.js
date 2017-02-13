import polyfill from 'babel-polyfill';
import func from 'util/func';
import { throttle } from 'underscore';
import common from './css/common.css';
import vue from 'vue';
import navBar from 'template/navBar';

const isDev = true;

console.log(System.import);

let arr = [ {name: 'liben', sex: 'male'}, {name: 'jinxue', sex: 'female'} ];
arr = arr.map(person => {
	person.name += '--human';
	return person;
});

let queryDiv = document.querySelector.partial('div');

let vm = new vue({
	render: (createElement => {
		return createElement('nav-bar');
	}),
	components : { navBar }
});
vm.$mount('.page');