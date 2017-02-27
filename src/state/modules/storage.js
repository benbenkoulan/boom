import { local } from 'util/storage';

let count = local.get('cartCount') || 0;

const storage = {
	state: { count },
	mutations: {
		increment (state, num){
			state.count += num;
		},
		clear (state){
			state.count = 0;
		}
	},
	actions: {//可以存在异步行为
		increment ({ commit, getters }, num){
			setTimeout(() => {
				commit('increment', num);
				local.set('cartCount', getters.countValue);
			}, 1000);
		},
		clear ( { commit } ){
			commit('clear');
			local.set('cartCount', 0);
		}
	},
	getters: {
		countValue : (state => {
			return state.count;
		})
	}
}
export default storage;