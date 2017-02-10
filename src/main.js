/*import polyfill from 'babel-polyfill';*/
import func from 'util/func';
import { throttle } from 'underscore';

const isDev = true;

let arr = [ {name: 'liben', sex: 'male'}, {name: 'jinxue', sex: 'female'} ];
arr = arr.map(person => {
	person.name += '--human';
	return person;
});

console.log(Promise);

let queryDiv = document.querySelector.partial('div');
console.log(queryDiv);