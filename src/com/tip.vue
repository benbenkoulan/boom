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
	.tip { padding: 20px; width: 120px; border-radius: 4px; }
</style>