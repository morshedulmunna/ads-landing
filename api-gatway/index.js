const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productClient = require("./services/productClient");
const orderClient = require("./services/orderClient");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// REST endpoint to get product details
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  productClient.GetProductDetails(
    { product_id: productId },
    (err, response) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(response);
    }
  );
});

// REST endpoint to create an order
app.post("/orders", (req, res) => {
  const { product_id, quantity } = req.body;

  orderClient.CreateOrder({ product_id, quantity }, (err, response) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
