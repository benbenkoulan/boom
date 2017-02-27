<template>
	<div class="page">
		<div>我的账户</div>
		<button @click="clearCart">清空购物车</button>
		<footer-nav :index="3"></footer-nav>
	</div>
</template>
<script>
	import footerNav from 'com/footerNav';
	import state from '../../state';
	export default {
		components: { footerNav },
		methods: {
			clearCart (){
				state.dispatch('clear');
			}
		}
	}
</script>