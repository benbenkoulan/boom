import Vue from 'vue';
import Vuex from 'vuex';
import storage from './modules/storage';

Vue.use(Vuex);

const state = new Vuex.Store({
	modules: { storage }
});
export default state;