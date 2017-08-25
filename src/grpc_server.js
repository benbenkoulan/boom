var path = require('path');
var grpc = require('grpc');
var PROTO_PATH = path.join(path.resolve('./protos'), 'productservice.proto');


var productservice = grpc.load(PROTO_PATH);


var data = [
	{
		"id": "1",
		"name": "提拉米苏",
		"items": [
			{
				"itemID": "11",
				"unit": "打",
				"price": 12
			},{
				"itemID": "12",
				"unit": "包",
				"price": 6
			},{
				"itemID": "13",
				"unit": "个",
				"price": 2
			},{
				"itemID": "14",
				"unit": "盒",
				"price": 10
			},{
				"itemID": "15",
				"unit": "箱",
				"price": 60
			}
		]
	},{
		"id": "2",
		"name": "卡布奇诺",
		"items": [
			{
				"itemID": "21",
				"unit": "打",
				"price": 22
			},{
				"itemID": "22",
				"unit": "包",
				"price": 16
			},{
				"itemID": "23",
				"unit": "个",
				"price": 4
			},{
				"itemID": "24",
				"unit": "盒",
				"price": 12
			},{
				"itemID": "25",
				"unit": "箱",
				"price": 80
			}
		]
	}
]
var queryProducts = (call, callback) => {
	setTimeout(() => {
		callback(null, { data });
	}, 3000);
}

var server = new grpc.Server();
server.addService(productservice.query.service, { queryProducts });
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();