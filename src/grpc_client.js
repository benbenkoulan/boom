var path = require('path');
var grpc = require('grpc');
var PROTO_PATH = path.join(path.resolve('./protos'), 'productservice.proto');

var productservice = grpc.load(PROTO_PATH);

var client = new productservice.query('localhost:50051', grpc.credentials.createInsecure());

export default client;