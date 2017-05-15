<template>
	<div class="page">
		<top :title="'首页'"></top>
		<div class="notice-board">
			<div class="marquee-board">
				<p class="marquee dib notice">这是公告,这是公告,这是公告,这是公告,这是公告</p>
			</div>
		</div>
		<div class="tac">
			<button @click="showAlert = true">弹出框</button>
			<button @click="showTip = true">弹出提示</button>
			<button @click="showLoading = true">弹出loading</button>
			<button @click="addToCart" >添加购物车</button>
		</div>

		<div v-for="product in products">
			<span>{{product.name}}</span>
			<ul>
				<li v-for="item in product.items">
					<p>
						<span>规格</span>
						<span>{{item.unit}}</span>
					</p>
					<p>
						<span>价格</span>
						<span>{{item.price}}</span>
					</p>
				</li>
			</ul>
		</div>
		<alert :show="showAlert" @ok="showAlert = false">
			<p>哈哈哈哈</p>
		</alert>
		<tip :show="showTip" @appeared="showTip = false">
			<p>{{tipMsg}}</p>
		</tip>
		<loading :show="showLoading"></loading>
		<footer-nav></footer-nav>
	</div>
</template>
<script>
	import top from '../com/top';
	import footerNav from '../com/footerNav';
	import loading from 'com/loading';
	import alert from 'com/alert';
	import tip from 'com/tip';

	export default {
		data() {
			return {
				showLoading: false,
				showAlert: false,
				showTip: false,
				tipMsg: '提示',
				products: []
			}
		},
		title: '首页',
		components: { alert, loading, tip, top, footerNav },
		mounted (){
		},
		methods: {
			addToCart (){
				console.log(this);
				this.$store.dispatch('addToCart', { itemID: '3', count: 3 }).then(() => {
					this.tipMsg = '添加购物车成功';
					this.showTip = true;
				})
			},
			getData (){
				this.showLoading = true;
				return G.ajax.request({
					url: '/json/products.json',
					data: {}
				}).then(response => {
					let resData = response.data || {};
					if(resData.resultcode == 0){
						this.products = resData.data || [];
					}
					this.showLoading = false;
					return { products: resData.data, showLoading: false };
				}).catch(error => {
					console.log(error);
					return error;
				})
			}
		}
	}
</script>
<style scoped>
	.page { padding-top: 1rem; }

	@keyframes marquee-board {
		from { transform: translate3d(100%, 0 , 0); }
		to { transform: translate3d(0, 0 , 0); }
	}

	@keyframes marquee {
		from { transform: translate3d(0, 0, 0); }
		to { transform: translate3d(-100%, 0, 0); }
	}

	.marquee-board {
		animation: marquee-board linear 6s infinite;
	}
	.marquee {
		animation: marquee linear 6s infinite;
	}

	.notice { white-space: nowrap; }

	button { width: 2rem; height: 1rem; font-size: 0.3rem; }
</style> 