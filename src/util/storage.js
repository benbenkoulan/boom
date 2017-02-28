export default store =>{
	let set = (key, value) => {
		if(typeof value == 'object'){
			store.setItem(key, JSON.stringify(value));
		} else {
			store.setItem(key, value);
		}
	};
	return {
		get (key){
			let ret = store.getItem(key);
			try{
				return JSON.parse(ret);
			} catch (e){
				return ret;
			}
		},
		set (){//支持对象，支持key,value
			let args = [].slice.call(arguments);
			let arg1 = args[0];
			if(typeof arg1 == 'object'){
				for(let key in arg1){
					set(key, arg1);
				}
			} else{
				set(arg1, args[1]);
			}
		}
	}
}