<template>
	<footer class="pf l0 b0 dt w100">
		<a class="dtc bsbb tac " :href="[index == 1 ? null : '/']" :class="[index == 1 ? 'nav-home-active' : 'nav-home']">{{title}}</a>
		<a class="dtc bsbb tac " :href="[index == 2 ? null : '/account.htm']" :class="[index == 2 ? ' nav-account-active' : 'nav-account']">我的</a>
	</footer>
</template>
<script>
	import { local, testStorage2 } from 'util/storage';
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
		methods: {
			
		}
	}
</script>
<style scoped>
	@import '../../css/vars.css';
	footer { height: 50px; border-top: 1px solid var(--border-main); border-bottom: 1px solid var(--border-main); }
	footer a { padding-top: 26px; background-repeat: no-repeat; background-size: 20px; background-position: center 4px; width: 0.1%; }
	.nav-home { background-image: url(../../img/home.svg); }
	.nav-account { background-image: url(../../img/account.svg); }
	.nav-home-active { background-image: url(../../img/home-active.svg); color: #f84d4d; }
	.nav-account-active { background-image: url(../../img/account-active.svg); color: #f84d4d; }
</style>