let state = {
	/*todo: {},
	done: {},
	canceled: {}
	doing: {}*/
	events: []
};

const mutations = {
	add(state, event){
		state.events.push(event);
	},
	update(state, { _event, index }){
		state.events.splice(index, 1);
		state.events.push(_event);
	}
}

const actions = {
	add({ commit }, event){
		commit('add', event);
	},
	update({ commit }, { _event, index }){
		commit('update', { _event, index });
	}
}

const getters = {
	events: state => state.events 
}

export default {
	state,
	mutations,
	actions,
	getters
}