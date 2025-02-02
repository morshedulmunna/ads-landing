package main

import (
	"context"
	"go/product-service/microservices/proto"
	"log"
	"net"

	"google.golang.org/grpc"
)

type server struct {
	proto.UnimplementedProductServiceServer
}

func (s *server) CreateProduct(ctx context.Context, req *proto.CreateProductRequest) (*proto.CreateProductResponse, error) {
	log.Printf("Product Created: %v", req.Name)
	return &proto.CreateProductResponse{Id: "123"}, nil
}

func (s *server) GetProducts(ctx context.Context, req *proto.GetProductsRequest) (*proto.GetProductsResponse, error) {
	log.Println("Fetching Products")
	return &proto.GetProductsResponse{
		Products: []*proto.Product{
			{Id: "123", Name: "Product 1", Description: "Description 1", Price: 19.99},
		},
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	proto.RegisterProductServiceServer(s, &server{})
	log.Println("Product Service is running on :50051")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
