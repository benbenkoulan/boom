import Axios from 'axios';

export default config => {
	/*var axios = Axios.create({
		baseURL: 'http://local.m.hualala.com:3000/',
		timeout: 3000
	});*/
	return new Promise((resolve, reject) => {
		Axios.get(config.url, {
			baseURL: 'http://dohko.m.hualala.com:3000',
			params: config.data
		}).then(response => {
			resolve(response.data || {});
		}).catch(error => {
			reject(error);
		});
	});
}