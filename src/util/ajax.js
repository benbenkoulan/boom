import Axios from 'Axios';

const request = (config => {
	/*var axios = Axios.create({
		baseURL: 'http://local.m.hualala.com:3000/',
		timeout: 3000
	});*/
	return new Promise((resolve, reject) => {
		Axios.get(config.url, {
			baseURL: 'http://local.m.hualala.com:3000',
			params: config.data
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		});
	});
});

export default {
	request
}