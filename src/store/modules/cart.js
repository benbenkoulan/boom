import { local } from 'util/cache';

let cart = local.get('cart') || {};
let cartProducts = cart['products'] || [];

const state = { cartProducts };

const setCart = (products => {
	cart.products = products || [];
	local.set('cart', cart);
});

const mutations = { 
	addToCart (state, product){
		let cartProduct = state.cartProducts.find(prod => {
			return prod.itemID === product.itemID;
		});
		if(cartProduct){
			cartProduct.count += product.count;
		} else {
			state.cartProducts.push(product);
		}
	},
	clearCart (state){
		state.cartProducts = [];
	}
};

const actions = {
	addToCart ({ commit, state }, product){
		return new Promise(resolve => {
			setTimeout(() => {
				commit('addToCart', product);
				setCart(state.cartProducts);
				resolve();
			}, 1000);
		});
	},
	clearCart ({ commit }){
		return new Promise(resolve => {
			setTimeout(() => {
				commit('clearCart');
				setCart()
				resolve();
			}, 1000);
		});
	}
}

const getters = {
	productsCount: state => {
		let count = 0;
		state.cartProducts.forEach(prod => {
			count += prod.count;
		})
		return count;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
};