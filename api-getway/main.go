package main

import (
	"context"
	"encoding/json"
	"go/api-getway/proto"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	productClient proto.ProductServiceClient
	orderClient   proto.OrderServiceClient
)

// ProductRequest represents the JSON structure for creating a product
type ProductRequest struct {
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float32 `json:"price"`
}

// OrderRequest represents the JSON structure for creating an order
type OrderRequest struct {
	ProductID string `json:"product_id"`
	Quantity  int32  `json:"quantity"`
}

// CreateProduct handles creating a product via JSON input
func createProduct(w http.ResponseWriter, r *http.Request) {
	var req ProductRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid JSON input", http.StatusBadRequest)
		return
	}

	res, err := productClient.CreateProduct(context.Background(), &proto.CreateProductRequest{
		Name:        req.Name,
		Description: req.Description,
		Price:       req.Price,
	})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"id": res.Id})
}

// GetProducts handles fetching all products and returning them as JSON
func getProducts(w http.ResponseWriter, r *http.Request) {
	res, err := productClient.GetProducts(context.Background(), &proto.GetProductsRequest{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(res.Products)
}

// CreateOrder handles creating an order via JSON input
func createOrder(w http.ResponseWriter, r *http.Request) {
	var req OrderRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid JSON input", http.StatusBadRequest)
		return
	}

	res, err := orderClient.CreateOrder(context.Background(), &proto.CreateOrderRequest{
		ProductId: req.ProductID,
		Quantity:  req.Quantity,
	})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"id": res.Id})
}

// GetOrders handles fetching all orders and returning them as JSON
func getOrders(w http.ResponseWriter, r *http.Request) {
	res, err := orderClient.GetOrders(context.Background(), &proto.GetOrdersRequest{})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(res.Orders)
}

func main() {
	// Connect to Product Service
	connProduct, err := grpc.NewClient("localhost:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("Failed to connect to Product Service: %v", err)
	}
	defer connProduct.Close()
	productClient = proto.NewProductServiceClient(connProduct)

	// Connect to Order Service
	connOrder, err := grpc.NewClient("localhost:50052", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("Failed to connect to Order Service: %v", err)
	}
	defer connOrder.Close()
	orderClient = proto.NewOrderServiceClient(connOrder)

	// Set up REST API
	r := mux.NewRouter()
	r.HandleFunc("/product", createProduct).Methods("POST")
	r.HandleFunc("/products", getProducts).Methods("GET")
	r.HandleFunc("/order", createOrder).Methods("POST")
	r.HandleFunc("/orders", getOrders).Methods("GET")

	log.Println("API Gateway is running on :8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
