<template>
	<div class="page">
		<div class="form">
			<input type="text" v-model="newEvent">
			<button @click="addEvent">提交</button>
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
	.form { line-height: 50px; }
	.form input { padding: 5px; border: 1px solid green; border-radius: 4px; outline: none; }
	.form button { padding: 6px 20px; background: lightgreen; color: #ffffff; border: none; border-radius: 4px; }
	
	.events { padding: 10px; }
	.events ul { margin-bottom: 2px; }
	.events ul li:first-of-type{ padding: 10px; background: lightgreen; color: #ffffff; }

	.events ul li:not(li:last-child) { border-bottom: 1px solid #cccccc; }
</style>