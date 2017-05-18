import Mock from 'mockjs';
Mock.mock(/.json$/, {
	'resultcode|1': '0',
	'data|1-2': [{
		'id|+1': 1,
		'name|1-3': '提',
		'items|1-3': [{
			'itemID|+1': 1,
			'unit|1-3': '盒',
			'price|1-100': 100
		}]
	}]
});