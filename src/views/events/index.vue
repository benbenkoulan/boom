<template>
	<div>
		<event v-for="event in events" :event="event" :key="event.id"></event>
	</div>
</template>
<script>
	import event from './event';
	export default {
		computed: {
			events(){
				return this.$store.getters.events;
			}
		},
		components: { event },
		fetchData(store){
			return store.dispatch('FETCH_EVENT_LIST');
		}
	}
</script>