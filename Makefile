gen:
	@protoc \
		--proto_path=protobuf "protobuf/order_product.proto" \
		--go_out=common/genproto/order_product \
		--go_out=paths=source_relative \
		--go-grpc_out=common/genproto/order_product \
		--go-grpc_out=paths=source_relative
