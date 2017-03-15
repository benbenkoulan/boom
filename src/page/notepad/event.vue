<template>
	<li class="pr db">
		<span v-if="event.type === 'done' || event.type === 'todo'" class="pa db select" :class="{'selected': event.type === 'done'}" @click="$emit('toggle')"></span>
		<p>{{event.title}}</p>
		<div class="pa action">
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
	li { padding: 10px 50px 10px 40px; }
	.select { left: 12px; top: 50%; margin-top: -8px; width: 16px; height: 16px; border: 1px solid #666666; border-radius: 4px;  }
	.selected:after { position: absolute; left: 0; top: 0; width: 16px; height: 16px; background: url(../../img/selected.svg) no-repeat; background-size: 16px; content: ''; }
	.action { right: 10px; top: 50%; margin-top: -11px; }
</style>