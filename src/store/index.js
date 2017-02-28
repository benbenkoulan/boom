import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';

Vue.use(Vuex);

const state = new Vuex.Store({
	modules: { cart },
	strict: process.env.NODE_ENV !== 'production'	//开发环境开启严格模式
});
export default state;