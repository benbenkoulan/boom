<template>
	<transition name="fade" appear>
		<div v-if="show" @scroll.prevent class="pf l0 t0 w100 h100 tac vc bg-semi z1 layer">
			<div class="dib bsbb bg-white panel"><slot></slot></div>
		</div>
	</transition>
</template>
<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			}
		}
	}
</script>
<style scoped>
	.layer { transition: opacity .3s ease; }
	.fade-enter-active, .fade-leave-active {
		opacity: 0;
	}
	.fade-enter .panel, .fade-enter-to .panel {
		transform: scale(0);
	}
	.panel { transition: transform .3s ease; border: 1px solid #cccccc; border-radius: 4px; }
</style>