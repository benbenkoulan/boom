<template>
	<div class="page">
		<img src="../../img/test.jpg" alt="" class="w100">
		<div>{{text}}</div>
		<nav-bar></nav-bar>
	</div>
</template>
<script>
	import navBar from 'com/navBar';
	export default {
		components: { navBar },
		mounted (){
			
		},
		computed: {
			text(){
				return typeof Promise + '-----------' + Array.prototype.includes;
			}
		},
		methods: {
			/*getData(){
				console.log('-----getData---------');
				return new Promise((resovle, reject) => {
					setTimeout(() => {
						resovle();
					}, 2000);
				});
			}*/
		}
	}
</script>
<style scoped>
	img { max-width: 100% }
	.test-select select { -webkit-appearance: none; padding: 15px 0 15px; border: 0; outline: none; width: 100px; color: #4d4b47; }
</style> 