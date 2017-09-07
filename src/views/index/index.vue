<template>
	<div>
		<router-link :to="{name: 'my'}">进入我的主页</router-link>
	</div>
</template>

<script>
	export default {
		name: 'index'
	}
</script>
<style scoped>
	a { text-decoration: underline; }
</style>