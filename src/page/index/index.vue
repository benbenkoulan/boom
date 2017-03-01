<template>
	<div class="page">
		<button @click="showAlert = true">弹出框</button>
		<button @click="showTip = true">弹出提示</button>
		<button @click="addToCart" >添加购物车</button>
		<alert :show="showAlert" @ok="showAlert = false">
			<p>哈哈哈哈</p>
		</alert>
		<tip :show="showTip" @appeared="showTip = false">
			<p>{{tipMsg}}</p>
		</tip>
		<footer-nav></footer-nav>
	</div>
</template>
<script>
	import footerNav from 'com/footerNav';
	import alert from 'com/alert';
	import tip from 'com/tip';
	export default {
		data() {
			return {
				showAlert: false,
				showTip: false,
				tipMsg: '提示',
			}
		},
		components: { footerNav, alert, tip },
		mounted (){
		},
		methods: {
			addToCart (){
				this.$store.dispatch('addToCart', { itemID: '3', count: 3 }).then(() => {
					this.tipMsg = '添加购物车成功';
					this.showTip = true;
				})
			},
			getData (){
				return ajax.request({
					url: '/json/products.json',
					data: {}
				}).then(response => {
					let resData = response.data || {};
					if(resData.resultcode == 0){
						console.log('-----------------');
						console.log(resData.data)
					}
					return resData.data;
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