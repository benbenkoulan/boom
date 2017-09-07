<template>
	<div id="page">
		<router-view></router-view>
		<nav class="nav">
			<router-link :to="'/index'">首页</router-link>
			<router-link :to="'/my'">我的</router-link>
		</nav>
	</div>
</template>

<script>
	export default {
	}
</script>

<style scoped>
	.nav { position: fixed; bottom: 0; left: 0; width: 100%; height: 80px; line-height: 80px; background: #f0f0f5; }
	.nav a { display: table-cell; width: 0.1%; text-align: center; border: 1px  solid #ccc; }

	.router-link-active { font-weight: bold; }
</style>