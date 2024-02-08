 // server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3003; // Update with your desired port
const mongoURI = 'mongodb://127.0.0.1:27017/ProductsDB'; // Update with your MongoDB URI

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const Product = mongoose.model('newdesigns', {
  name: String,
  size: String,
  price: String,
  qty: String,
});

// Route to get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update a product
app.put('/products/:id', async (req, res) => {
  const productId = req.params.id;
  const updatedProductData = req.body;

  try {
    // Update the product in the database
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
