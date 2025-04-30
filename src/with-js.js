const grpc = require('@grpc/grpc-js')
const  protoLoader = require( '@grpc/proto-loader')

console.log(grpc,protoLoader)
const packageDefinition = protoLoader.loadSync('./hello.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: false,
    oneofs: true,
});

console.log(packageDefinition)