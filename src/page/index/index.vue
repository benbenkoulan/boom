<template>
	<div class="page">
		<img src="../../img/test.jpg" alt="" class="w100">
		<nav-bar></nav-bar>
	</div>
</template>
<script>
	import navBar from 'com/navBar';
	export default {
		components: { navBar }
	}
</script>
<style scoped>
	img { max-width: 100% }
</style>