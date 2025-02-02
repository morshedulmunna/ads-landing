use std::error::Error;

fn main() -> Result<(), Box<dyn Error>> {
    // List of .proto files
    let proto_files = &[
        "../protobuf/order_product.proto",
        "../protobuf/product.proto",
    ];

    // Specify the include path for .proto imports
    let proto_include = "../protobuf";

    tonic_build::configure()
        .build_client(true)
        .build_server(true)
        .compile_protos(proto_files, &[proto_include])?;
    Ok(())
}
