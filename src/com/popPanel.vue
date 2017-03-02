<template>
	<transition name="fade" appear @after-enter="afterEnter">
		<div v-if="show" @scroll.prevent class="pf l0 t0 w100 h100 tac vc z1 layer" :class="[semi ? 'bg-semi' : '']">
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
			},
			semi: {
				type: Boolean,
				default: true
			},
			duration: {
				type: Number,
				default: 3
			}
		},
		computed: {
			time (){
				return this.duration * 1000;
			}
		},
		methods: {
			afterEnter (){
				setTimeout(() => {
					this.$emit('appeared');
				}, this.time)
			}
		}
	}
</script>
<style scoped>
	.layer { transition: opacity .3s ease; }
	.fade-enter, .fade-leave-active {
		opacity: 0;
	}
	.fade-enter .panel, .fade-leave-active .panel {
		transform: scale(0);
	}
	.panel { transition: transform .3s ease; border: 1px solid #cccccc; border-radius: 4px; }
</style>