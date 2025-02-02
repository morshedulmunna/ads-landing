#!/bin/bash

# Generate code for Product Service
protoc --go_out=../product-service --go-grpc_out=../product-service ./product.proto

# Generate code for Order Service
protoc --go_out=../order-service --go-grpc_out=../order-service ./order.proto

# Generate code for API Gateway
protoc --go_out=../api-getway --go-grpc_out=../api-getway ./product.proto
protoc --go_out=../api-getway --go-grpc_out=../api-getway ./order.proto