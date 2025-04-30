import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

console.log(grpc,protoLoader)
const packageDefinition = protoLoader.loadSync('./hello.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: false,
    oneofs: true,
});

console.log(packageDefinition)