<template>
	<div>
		{{userInfo.userName}}的主页
	</div>
</template>
<script>
	export default {
		data (){
			return {
				userName: ''
			}
		},
		computed: {
			userInfo(){
				return this.$store.getters.user || {};
			}
		},
		fetchData(store){
			return store.dispatch('getUserInfo');
		},
		beforeMount(){
		},
		methods: {
		}
	}
</script>