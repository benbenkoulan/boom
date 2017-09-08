<template>
	<div class="container">
		<div class="bg-white dbb top-bar">
			<p class="fz">{{user.name}}</p>
		</div>
		<div class="bg-white dbt dbb bar">
			<router-link :to="'/events'" class="db">我的事情</router-link>
		</div>

		<div class="bg-white dbt dbb bar">
			<router-link :to="'/events'" class="db">我喜欢的文章</router-link>
		</div>
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
			user(){
				return this.$store.getters.user || {};
			}
		},
		fetchData(store){
			store.dispatch('FETCH_USER')
		},
		beforeMount(){
		}
	}
</script>
<style scoped>
	.container { display: flex; flex-direction: column; }
	.top-bar { margin-bottom: 0.5rem; padding: 0.5rem 1rem 0.5rem 2.6rem; min-height: 1.6rem; background-image: url(~img/my/no-photo.svg); background-repeat: no-repeat; background-size: 1.6rem 1.6rem; background-position: 0.5rem center; }
	.bar { padding: 0.3rem; margin-bottom: 0.5rem; }

	.p20 { padding: 20px; }
	.fz { font-size: 0.6rem; }
	.dbt { border-top: 1px solid #ccc; }
	.dbb { border-bottom: 1px solid #ccc; }

	.head-img { width: 2rem; height: 2rem; }
</style>