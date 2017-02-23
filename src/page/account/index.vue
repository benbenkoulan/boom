<template>
	<div class="page">
		<div>我的账户</div>
		<nav-bar :index="2"></nav-bar>
	</div>
</template>
<script>
	import navBar from 'com/navBar';
	export default {
		components: { navBar }
	}
</script>