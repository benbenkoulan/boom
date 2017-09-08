let state = {
	user: {
		id: 0,
		age: 0,
		name: ''
	}
}

const mutations = {
	FETCH_USER(state){
		state.user = {
			id: 1,
			age: 20,
			name: '李奔'
		}
	}
}

const actions = {
	FETCH_USER(context){
		context.commit('FETCH_USER');
	}
}

const getters = {
	user: state => {
		return state.user;
	}
}

export default { state, mutations, actions, getters }