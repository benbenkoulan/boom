<template>
	<footer class="pf l0 b0 dt w100 z1 bg-white tac">
		<!-- <router-link :class="[index == 1 ? 'nav-home-active' : 'nav-home']" class="dtc bsbb" :to="{name: 'index', params: { g: 5 }}">首页</router-link>	 -->
		<a class="dtc bsbb" :href="[index == 1 ? null : '/?g=5']" :class="[index == 1 ? 'nav-home-active' : 'nav-home']">{{title}}</a>
		<a class="pr dtc bsbb" :href="[index == 2 ? null : '/car.htm?g=5']" :class="[index == 2 ? 'nav-car-active' : 'nav-car']">
			<span class="c-inherit">购物车</span>
			<span v-show="count" class="pa c-white count">{{count}}</span>
		</a>
		<a class="dtc bsbb" :href="[index == 3 ? null : '/account.htm?g=5']" :class="[index == 3 ? 'nav-account-active' : 'nav-account']">我的</a>
		<router-link :to="{name: 'account'}">我的</router-link>
	</footer>
</template>
<script>
	export default {
		props: {
			index: {
				type: Number,
				default: 1
			}
		},
		mounted (){
		},
		data() {
			return {
				title : '首页'
			}
		},
		computed: {
			count() {
				return 0; //this.$root.$store.getters.productsCount;
			}
		}
	}
</script>
<style scoped>
	footer { padding: 0.1rem 0; border-top: 1px solid #cccccc; border-bottom: 1px solid var(--border-main); }
	footer a { padding-top: 0.7rem; background-repeat: no-repeat; background-size: 0.6rem; background-position: center top; width: 0.1%; }
	.nav-home { background-image: url(../../img/home.svg); }
	.nav-car { background-image: url(../../img/car.svg); }
	.nav-account { background-image: url(../../img/account.svg); }
	.nav-home-active { background-image: url(../../img/home-active.svg); color: #f84d4d; }
	.nav-car-active { background-image: url(../../img/car-active.svg); color: #f84d4d; }
	.nav-account-active { background-image: url(../../img/account-active.svg); color: #f84d4d; }

	.count { top: 0; left: 50%; margin-left: 10px; width: 0.4rem; line-height: 0.4rem; font-size: 0.25rem; background: #f84d4d; border-radius: 0.4rem; }
</style>