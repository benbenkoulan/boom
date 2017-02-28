<template>
	<div class="page">
		<footer-nav :index="2"></footer-nav>
	</div>
</template>
<script>
	import footerNav from 'com/footerNav';
	export default {
		data (){
			return {
			}
		},
		components: { footerNav },
		methods: {
			lose (){

			}
		}
	}
</script>
<style scoped>
	.form { margin-top: 50px; }
	.form div { padding: 10px; }
</style>