<template>
	<div class="page">
		<div @click="showAlert = true">{{text}}</div>
		<alert :show="showAlert" @ok="showAlert = false">
			<p>哈哈哈哈</p>
		</alert>
		<footer-nav></footer-nav>
	</div>
</template>
<script>
	import footerNav from 'com/footerNav';
	import alert from 'com/alert';
	export default {
		data() {
			return {
				showAlert: false
			}
		},
		components: { footerNav, alert },
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