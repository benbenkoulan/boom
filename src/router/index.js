import Vue from 'vue';
import vueRouter from 'vue-router';

Vue.use(vueRouter);

const getIndexView = () => System.import('../views/index');
const getMyView = () => System.import('../views/my');
const getEventsView = () => System.import('../views/events');

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
		},{
			name: 'events',
			path: '/events',
			component: getEventsView
		}]
	})
}