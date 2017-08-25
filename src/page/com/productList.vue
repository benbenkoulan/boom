<template>
	<div class="df bg-white product-list column-list">
		<product v-for="product in products" :key="product.id"></product>
	</div>
</template>
<script>
	import product from './product';
	export default {
		data (){
			return {
				products: [1, 2, 3, 4, 5]
			}
		},
		components: { product }
	}
</script>

<style scoped>
	.product-list { padding: 2%; box-sizing: border-box; width: 100%; flex-wrap: wrap; }
	.row-list { flex-direction: row; justify-content: space-between; }
	.row-list .product { flex-basis: 49%; }

	.column-list { flex-direction: column; }
</style>