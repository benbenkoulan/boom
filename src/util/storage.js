import createStore from './store';
export default createStore(sessionStorage);
export let local = createStore(localStorage);
export function testStorage(){
	console.log('-------------testStorage-----------');
}
export function testStorage2(){
	console.log('-------------testStorage2-----------');
}