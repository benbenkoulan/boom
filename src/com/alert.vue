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
	.tip { padding: 0.3rem; width: 4rem; }
	.ok { padding: 0.3rem; border-top: 1px solid #cccccc; }
</style>