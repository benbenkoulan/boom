<template>
	<div class="page">
		<div class="tac">我的账户</div>
		<button @click="clearCart">清空购物车</button><br/>
		<a href="/notepad.htm">记事本</a>
		<footer-nav :index="3"></footer-nav>
		<tip :show="showTip" @appeared="showTip = false">{{tipMsg}}</tip>
	</div>
</template>
<script>
	import footerNav from 'com/footerNav';
	import tip from 'com/tip';
	export default {
		data (){
			return {
				showTip: false,
				tipMsg: ''
			}
		},
		components: { footerNav, tip },
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
	a { text-decoration: underline; color: blue; }
</style>