<template>
	<div class="df product">
		<p class="product-img"></p>
		<div class="pr product-info">
			<p class="product-name">提拉米苏提拉米苏</p>
			<p class="product-price">
				<span class="point">15</span>
				<span>+</span>
				<span class="money">25</span>
				<del class="money">20</del>
			</p>
			<span class="pa db tac c-white cart-btn">购物车</span>
		</div>
	</div>
</template>

<style scoped>
	.column-list .product { margin-bottom: 10px; flex-direction: row; justify-content: space-between; }
	.column-list .product .product-img { width: 32%; padding-top: 30%; }
	.column-list .product .product-info { width: 66%; }
	.column-list .product { flex-direction: row; align-items: space-between; }
	.row-list .product { flex-direction: column; }
	.row-list .product .product-img { width: 100%; padding-top: 70%; }

	.product-img { background-image: url(https://res.hualala.com/group2/M00/0A/84/wKgBMlhiCeacGdrfAANS6HSblR8027=348x244.jpg?quality=70); background-repeat: no-repeat; background-size: cover; background-position: center; }
	.product-info { margin-top: 5px; padding-bottom: 1.2rem; flex-shrink: 2; }
	.product-price span { color: #f60; }
	.cart-btn { right: 5px; bottom: 0.2rem; width: 1.6rem; height: 0.8rem; line-height: 0.8rem; font-size: 0.4rem; background-color: #f60; border-radius: 6px; }
</style>