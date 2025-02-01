const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = "../proto/order_product.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const orderProductProto =
  grpc.loadPackageDefinition(packageDefinition).order_product;

const orderClient = new orderProductProto.OrderService(
  "localhost:50052",
  grpc.credentials.createInsecure()
);

module.exports = orderClient;
