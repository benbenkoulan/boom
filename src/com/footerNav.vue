<template>
	<footer class="pf l0 b0 dt w100 tac">
		<a class="dtc bsbb" :href="[index == 1 ? null : '/']" :class="[index == 1 ? 'nav-home-active' : 'nav-home']">{{title}}</a>
		<a class="pr dtc bsbb" :href="[index == 2 ? null : '/car.htm']" :class="[index == 2 ? 'nav-car-active' : 'nav-car']">
			<span class="c-inherit">购物车</span>
			<div v-show="count" class="pa c-white count">{{count}}</div>
		</a>
		<a class="dtc bsbb" :href="[index == 3 ? null : '/account.htm']" :class="[index == 3 ? 'nav-account-active' : 'nav-account']">我的</a>
	</footer>
</template>
<script>
	import { local } from 'util/storage';
	import state from '../state';
	console.log(state);
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
				return state.getters.countValue;
			}
		}
	}
</script>
<style scoped>
	@import '../css/vars.css';
	footer { height: 50px; border-top: 1px solid var(--border-main); border-bottom: 1px solid var(--border-main); }
	footer a { padding-top: 26px; background-repeat: no-repeat; background-size: 20px; background-position: center 4px; width: 0.1%; }
	.nav-home { background-image: url(../img/home.svg); }
	.nav-car { background-image: url(../img/car.svg); }
	.nav-account { background-image: url(../img/account.svg); }
	.nav-home-active { background-image: url(../img/home-active.svg); color: #f84d4d; }
	.nav-car-active { background-image: url(../img/car-active.svg); color: #f84d4d; }
	.nav-account-active { background-image: url(../img/account-active.svg); color: #f84d4d; }

	.count { top: 0; left: 50%; margin-left: 5px; width: 15px; height: 15px; line-height: 15px; font-size: 12px; background: #f84d4d; border-radius: 15px; }
</style>