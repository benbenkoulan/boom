<template>
	<div class="page">
		<button @click="clearCart">清空购物车</button>
		<footer-nav :index="2"></footer-nav>
		<tip :show="showTip" @appeared="showTip = false">{{tipMsg}}</tip>
	</div>
</template>
<script>
	import tip from 'com/tip';
	export default {
		data (){
			return {
				showTip: false,
				tipMsg: ''
			}
		},
		components: { tip },
		methods: {
			clearCart (){
				this.$store.dispatch('clearCart').then(() => {
					this.tipMsg = '购物车已清空';
					this.showTip = true;
				});
			}
		}
	}
</script>
<style scoped>
	.form { margin-top: 50px; }
	.form div { padding: 10px; }
</style>