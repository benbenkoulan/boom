<template>
	<pop-panel :show="show" :semi="false" @appeared="$emit('appeared')">
		<div class="dib c-white bg-semi tip"><slot></slot></div>
	</pop-panel>
</template>
<script>
	import popPanel from './popPanel';
	export default {
		components: { popPanel },
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		methods: {
		}
	}
</script>
<style scoped>
	.tip { padding: 0.4rem; width: 3rem; border-radius: 0.1rem; }
</style>