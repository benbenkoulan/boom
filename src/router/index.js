import Vue from 'vue';
import vueRouter from 'vue-router';

Vue.use(vueRouter);

const getIndexView = () => System.import('../views/index/index');
const getMyView = () => System.import('../views/my/index');

export function createRouter() {
	return new vueRouter({
		mode: 'history',
		routes: [{
			path: '/',
			redirect: '/index'
		},{
			name: 'index',
			path: '/index',
			component: getIndexView
		},{
			name: 'my',
			path: '/my',
			component: getMyView
		}]
	})
}