import axios from 'axios';

const request = (config => {
	return new Promise((resolve, reject) => {
		axios.get(config.url, {
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