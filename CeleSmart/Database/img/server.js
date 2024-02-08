const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;





app.use(bodyParser.json({ limit: '100mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true })); // Adjust the limit as needed


mongoose.connect('mongodb://127.0.0.1:27017/ProductsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

const Product = mongoose.model('newdesign', {
  name: String,
  price: String,
  qty: String,
  size: String,
  image: { data: Buffer, contentType: String },
});

// Fetch all products including their IDs
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Update a product by ID
app.put('/products/:id', async (req, res) => {
  const productId = req.params.id;
  console.log('Received Product ID:', productId); // Debugging line

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).send('Invalid product ID');
  }

  // Your update logic goes here...

  res.send('Product updated successfully');
});

app.post('/upload', async (req, res) => {
  try {
    const { name, price, qty, size, image } = req.body;

    // Convert base64 image to Buffer
    const imageBuffer = Buffer.from(image, 'base64');

    // Save product data and image to MongoDB
    const product = new Product({
      name,
      price,
      qty,
      size,
      image: {
        data: imageBuffer,
        contentType: 'image/jpeg', // Update with the actual content type
      },
    });

    await product.save();

    res.status(201).json({ message: 'Product uploaded successfully' });
  } catch (error) {
    console.error('Error processing upload:', error);
    res.status(500).send('Internal Server Error');
  }
});

// app.put('/updateProduct/:id', async (req, res) => {
//   const productId = req.params.id;
//   console.log('Received Product ID for update:', productId);

//   if (!mongoose.Types.ObjectId.isValid(productId)) {
//     return res.status(400).send('Invalid product ID');
//   }

//   try {
//     const updatedProduct = await Product.findOneAndUpdate(
//       { _id: productId },
//       req.body,  // Assumes that req.body contains the updated fields
//       { new: true }
//     );

//     if (!updatedProduct) {
//       return res.status(404).send('Product not found');
//     }

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     console.error('Error updating product:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });


// app.put('/updateProduct/:id', async (req, res) => {
//   const productId = req.params.id;
//   console.log('Received Product ID for update:', productId);

//   if (!mongoose.Types.ObjectId.isValid(productId)) {
//     return res.status(400).send('Invalid product ID');
//   }

//   try {
//     let updatedFields = req.body;

//     // Check if image data is provided
//     if (updatedFields.image) {
//       // Decode base64 image string and convert to Buffer
//       const imageBuffer = Buffer.from(updatedFields.image, 'base64');
//       updatedFields.image = {
//         data: imageBuffer,
//         contentType: 'image/jpeg' // Update with the actual content type if needed
//       };
//     }

//     const updatedProduct = await Product.findOneAndUpdate(
//       { _id: productId },
//       updatedFields,
//       { new: true }
//     );

//     if (!updatedProduct) {
//       return res.status(404).send('Product not found');
//     }

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     console.error('Error updating product:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

app.put('/updateProduct/:id', async (req, res) => {
  const productId = req.params.id;
  console.log('Received Product ID for update:', productId);

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).send('Invalid product ID');
  }

  try {
    let updatedFields = req.body;

    // Check if image data is provided
    if (updatedFields.image) {
      // Decode base64 image string and convert to Buffer
      const imageBuffer = Buffer.from(updatedFields.image, 'base64');
      updatedFields.image = {
        data: imageBuffer,
        contentType: 'image/jpeg' // Update with the actual content type if needed
      };
    }

    // Update the product details
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      updatedFields,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).send('Product not found');
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
      const productId = req.params.id;
      console.log(`Received DELETE request for product ID: ${productId}`);

      // Check if product exists
      const product = await Product.findById(productId);
      if (!product) {
          console.log(`Product with ID ${productId} not found`);
          return res.status(404).send('Product not found');
      }

      // Delete the product
      await product.remove();

      console.log(`Product with ID ${productId} deleted successfully`);
      res.status(200).send('Product deleted successfully');
  } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
