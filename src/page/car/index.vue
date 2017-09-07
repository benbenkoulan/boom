<template>
	<div class="page">
		<tip :show="showTip" @appeared="showTip = true">
			{{tipMsg}}
		</tip>
		<button @click="clearCart">清空购物车</button>
		<bottom :index="2"></bottom>
	</div>
</template>
<script>
	import tip from 'com/tip';
	import bottom from '../com/bottom';
	export default {
		data (){
			return {
				showTip: false,
				tipMsg: ''
			}
		},
		title: '购物车',
		components: { tip, bottom },
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