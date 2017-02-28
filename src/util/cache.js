import createStore from './storage';
export default createStore(sessionStorage);
export let local = createStore(localStorage);