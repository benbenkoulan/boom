<template>
	<div class="page">
		<div class="tac form">
			<input type="text" v-model="newEvent">
			<button class="c-white" @click="addEvent">提交</button>
		</div>
		<div class="events">
			<ul>
				<li>待办事项</li>
				<event v-for="(event, index) in events" v-if="event.type === 'todo'" :event="event" @toggle="updateEvent(event, index)" @cancel="cancelEvent(event, index)"></event>
			</ul>
			<ul>
				<li>已办事项</li>
				<event v-for="(event, index) in events" v-if="event.type === 'done'" :event="event" @toggle="updateEvent(event, index)"></event>
			</ul>
			<ul>
				<li>取消事项</li>
				<event v-for="(event, index) in events" v-if="event.type === 'cancel'" :event="event" @recover="recoverEvent(event, index)"></event>
			</ul>
		</div>
	</div>
</template>
<script>
	import event from './event';
	export default {
		data() {
			return {
				newEvent: ''
			}
		},
		title: '记事本',
		components: { event },
		computed: {
			events() {
				return this.$store.getters.events || [];
			}
		},
		mounted(){
			console.log(this);
		},
		methods: {
			addEvent(){
				if(!this.newEvent) return '';
				this.$store.dispatch('add', {
					title: this.newEvent,
					time: new Date(),
					type: 'todo'
				});
				this.newEvent = '';
			},
			updateEvent(event, index){
				let _event = Object.assign({}, event);
				_event.type = event.type === 'todo' ? 'done' : 'todo';
				this.$store.dispatch('update', { _event, index });
			},
			cancelEvent(event, index){
				let _event = Object.assign({}, event);
				_event.type = 'cancel';
				this.$store.dispatch('update', { _event, index });
			},
			recoverEvent(event, index){
				let _event = Object.assign({}, event);
				_event.type = 'todo';
				this.$store.dispatch('update', { _event, index });
			}
		}
	}
</script>
<style>
	.form { line-height: 1rem; }
	.form input { padding: 0.1rem; width: 3rem; border: 1px solid green; border-radius: 0.1rem; outline: none; }
	.form button { padding: 0.1rem 0.3rem; background: lightgreen; border: none; border-radius: 0.1rem; }
	
	.events { padding: 0.2rem; }
	.events ul { margin-bottom: 2px; font-size: 0.5rem; }
	.events ul li:first-of-type{ padding: 0.2rem; background: lightgreen; color: #ffffff; }

	.events ul li:not(li:last-child) { border-bottom: 1px solid #cccccc; }
</style>