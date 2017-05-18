<template lang="html">
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
		<div v-for="product in products" :key="product.id">
			<span>{{product.name}}</span>
			<ul>
				<li class="product" v-for="item in product.items" :key="item.id">
					<p class="dib"><span>规格</span>:<span>{{item.unit}}</span></p>
					<p class="dib"><span>价格</span>:<span>{{item.price}}</span></p>
				</li>
			</ul>
		</div>
		<ul  v-for="card in cards" :key="card.id">{{card.cardName}}</ul>
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
				products: [],
				cards: []
			}
		},
		title: '首页',
		components: { alert, loading, tip, top, footerNav },
		mounted (){
		},
		methods: {
			addToCart (){
				this.$store.dispatch('addToCart', { itemID: '3', count: 3 }).then(() => {
					this.tipMsg = '添加购物车成功';
					this.showTip = true;
				})
			},
			getData (){
				this.showLoading = true;
				let that = this;
				let cardPromise = G.ajax.request({
					url: '/json/cards.json',
					data: {}
				}).then(data => {
					if(data.resultcode == 0){
						that.cards = data.data || [];
					}
					return that.cards;
				});
				let productPromise = G.ajax.request({
					url: '/json/products.json',
					data: {}
				}).then(data => {
					if(data.resultcode == 0){
						that.products = data.data || [];
					}
					return that.products;
				});
				return Promise.all([productPromise, cardPromise]).then(([products, cards]) => {
					that.showLoading = false;
					console.log(cards);
					return { products, cards, showLoading: false };
				}).catch(err => {
					console.log(err);
					return err;
				});
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

	.product p { text-indent: 0.4rem; }
</style> 