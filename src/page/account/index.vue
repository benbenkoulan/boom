<template>
	<div class="page">
		<div>我的账户</div>
		<button @click="clearCart">清空购物车</button>
		<footer-nav :index="3"></footer-nav>
	</div>
</template>
<script>
	import footerNav from 'com/footerNav';
	export default {
		components: { footerNav },
		methods: {
			clearCart (){
				this.$store.dispatch('clearCart');
			}
		}
	}
</script>