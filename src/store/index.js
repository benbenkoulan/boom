import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import event from './modules/event';

Vue.use(Vuex);

export function createStore(){
	return new Vuex.Store({
		modules: { user, event },
		strict: process.env.NODE_ENV !== 'production'	//开发环境开启严格模式
	});
}