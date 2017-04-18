<template>
	<div class="pf t0 l0 w100 bsbb z-m tac c-white top">{{title}}</div>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			}
		},
		destroyed (){
			console.log('------destroyed--------');
		}
	}
</script>
<style scoped>
	.top { line-height: 1rem; background: #35495e; }
</style>