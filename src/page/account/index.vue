<template>
	<div class="page">
		<div>我的账户</div>
		<footer-nav :index="2"></footer-nav>
	</div>
</template>
<script>
	import footerNav from 'com/footerNav';
	export default {
		components: { footerNav }
	}
</script>