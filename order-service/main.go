package main

import (
	"context"
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc"
)

type orderServiceServer struct {
	proto.UnimplementedOrderServiceServer
}

func (s *orderServiceServer) CreateOrder(ctx context.Context, req *proto.OrderRequest) (*proto.OrderResponse, error) {
	productID := req.GetProductId()
	quantity := req.GetQuantity()

	// Call ProductService to get product details
	conn, err := grpc.NewClient("localhost:50051", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Failed to connect to ProductService: %v", err)
	}
	defer conn.Close()

	client := proto.NewProductServiceClient(conn)
	productResp, err := client.GetProductDetails(ctx, &proto.ProductRequest{ProductId: productID})
	if err != nil {
		log.Fatalf("Failed to get product details: %v", err)
	}

	// Calculate total price
	totalPrice := productResp.GetPrice() * float32(quantity)

	// Return order response
	return &proto.OrderResponse{
		OrderId:    "order-123",
		ProductId:  productID,
		Quantity:   quantity,
		TotalPrice: totalPrice,
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50052")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()
	proto.RegisterOrderServiceServer(grpcServer, &orderServiceServer{})

	fmt.Println("OrderService running on :50052")
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
