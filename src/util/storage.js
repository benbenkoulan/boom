import createStore from './store';
export default createStore(sessionStorage);
export let local = createStore(localStorage);