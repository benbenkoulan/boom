<template>
	<div class="page">
		<button @click="showAlert = true">弹出框</button>
		<button @click="addToCart" >添加购物车</button>
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
		methods: {
			addToCart (){
				this.$store.dispatch('addToCart', { itemID: '2', count: 3 });
			},
			getData (){
				return ajax.request({
					url: '/json/products.json',
					data: {}
				}).then(response => {
					console.log('-----------------');
					console.log(response);
					return response;
				}).catch(error => {
					console.log('==================');
					console.log(error);
					return error;
				})
			}
		}
	}
</script>
<style scoped>
</style> 