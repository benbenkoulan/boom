import { fetchEventList } from 'api/event';

const state = {
	events: []
}

const mutations = {
	SET_EVENT_LIST(state, events){
		state.events = events;
	},
	ADD_EVENT(state, event){

	},
	MARK_EVENT(state, { id, status }){

	}
}

const actions = {
	FETCH_EVENT_LIST(context){
		fetchEventList().then(events => {
			context.commit('SET_EVENT_LIST', events);	
		});
	},
	ADD_EVENT(context, event){
		context.commit('ADD_EVENT', event);
	},
	MARK_EVENT(context, {id, status}){
		context.commit('MARK_EVENT', {id, status})
	}
}

const getters = {
	events: state =>{
		return state.events
	},
	todos: state => {
		return state.events.filter(event => event.status === 0)
	},
	dones: state => {
		return state.events.filter(event => event.status === 1)
	}
}

export default { state, mutations, actions, getters }