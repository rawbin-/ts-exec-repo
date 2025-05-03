import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'

console.log(grpc,protoLoader)
const packageDefinition = protoLoader.loadSync('./hello.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: false,
    oneofs: true,
});

console.log(packageDefinition)