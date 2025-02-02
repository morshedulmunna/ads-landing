use order_product::product_service_server::{ProductService, ProductServiceServer};
use order_product::{ProductRequest, ProductResponse};
use tonic::{transport::Server, Request, Response, Status};

pub mod order_product {
    tonic::include_proto!("order_product");
}

#[derive(Debug, Default)]
pub struct MyProductService {}

#[tonic::async_trait]
impl ProductService for MyProductService {
    async fn get_product_details(
        &self,
        request: Request<ProductRequest>,
    ) -> Result<Response<ProductResponse>, Status> {
        let req = request.into_inner();
        let product_id = req.product_id;

        // Mock product details
        let response = ProductResponse {
            product_id: product_id.clone(),
            name: "Sample
             Product"
                .to_string(),
            price: 99.99,
        };

        Ok(Response::new(response))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "[::1]:50051".parse()?;
    let product_service = MyProductService::default();

    println!("ProductService running on {}", addr);

    Server::builder()
        .add_service(ProductServiceServer::new(product_service))
        .serve(addr)
        .await?;

    Ok(())
}
