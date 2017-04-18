<template>
	<li class="pr db">
		<span v-if="event.type === 'done' || event.type === 'todo'" class="pa db select" :class="{'selected': event.type === 'done'}" @click="$emit('toggle')"></span>
		<p :class="{'line': event.type === 'cancel'}">{{event.title}}</p>
		<div class="pa r0 h100 action">
			<button v-if="event.type === 'todo'" @click="$emit('cancel')">取消</button>
			<span v-else-if="event.type === 'done'">{{event.date}}</span>
			<button v-else-if="event.type === 'cancel'" @click="$emit('recover')">恢复</button>
		</div>
	</li>
</template>
<script>
	export default {
		props: {
			event: {
				type: Object,
				default (){
					return {}
				}
			}
		}
	}
</script>
<style scoped>
	li { padding: 0.4rem 2rem 0.4rem 0.8rem; }
	.select { left: 0.2rem; top: 50%; margin-top: -0.2rem; width: 0.4rem; height: 0.4rem; border: 1px solid #666666; border-radius: 0.1rem;  }
	.selected:after { position: absolute; left: 0; top: 0; width: 0.4rem; height: 0.4rem; background: url(../../img/selected.svg) no-repeat; background-size: 0.4rem; content: ''; }
	.line { text-decoration: line-through; }
	.action { top: 50%; margin-top: -0.5rem; }
	.action * { width: 2rem; height: 1rem; border-radius: 0.1rem; }
</style>