let state = {
	user: {
		id: 0,
		age: 0,
		userName: ''
	}
}

const mutations = {
	getUserInfo(){
		state.user = {
			id: 1,
			age: 20,
			userName: '李奔'
		}
	}
}

const actions = {
	getUserInfo(context){
		context.commit('getUserInfo');
	}
}
 
const getters = {
	user: state => {
		return state.user;
	}
}

export default { state, mutations, actions, getters }