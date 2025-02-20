package main

import (
	"context"
	"go/order-service/proto"
	rabbitmq "go/rabitmq"
	"log"
	"net"

	"google.golang.org/grpc"
)

type server struct {
	proto.UnimplementedOrderServiceServer
}

func (s *server) CreateOrder(ctx context.Context, req *proto.CreateOrderRequest) (*proto.CreateOrderResponse, error) {
	log.Printf("Order Created for Product ID: %v", req.ProductId)
	return &proto.CreateOrderResponse{Id: "456"}, nil
}

func (s *server) GetOrders(ctx context.Context, req *proto.GetOrdersRequest) (*proto.GetOrdersResponse, error) {
	log.Println("Fetching Orders")
	return &proto.GetOrdersResponse{
		Orders: []*proto.Order{
			{Id: "456", ProductId: "123", Quantity: 2},
		},
	}, nil
}

func main() {

	// Connect to RabbitMQ
	conn, err := rabbitmq.Connect()
	if err != nil {
		log.Fatalf("Failed to connect to RabbitMQ: %v", err)
	}
	defer conn.Close()

	ch, err := rabbitmq.CreateChannel(conn)
	if err != nil {
		log.Fatalf("Failed to open a channel: %v", err)
	}
	defer ch.Close()

	lis, err := net.Listen("tcp", ":50052")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	proto.RegisterOrderServiceServer(s, &server{})
	log.Println("Order Service is running on :50052")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
