<template>
	<pop-panel :show="show">
		<main class="tip"><slot></slot></main>
		<p class="ok" @click="$emit('ok')">{{text}}</p>
	</pop-panel>
</template>
<script>
	import popPanel from './popPanel';
	export default {
		props: {
			text: {
				type: String,
				default: '知道了'
			},
			show: {
				type: Boolean,
				default: false
			}
		},
		components: { popPanel }
	}
</script>
<style scoped>
	.tip { padding: 10px; width: 200px; }
	.ok { padding: 10px; border-top: 1px solid #cccccc; }
</style>