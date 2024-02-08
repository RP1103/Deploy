// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');

// const app = express();
// const port = 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/imageDB', { useNewUrlParser: true, useUnifiedTopology: true });

// // Define a MongoDB model
// const Image = mongoose.model('Image', { data: Buffer, contentType: String });

// // Set up Multer for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // Endpoint for uploading an image
// app.post('/upload', upload.single('image'), async (req, res) => {
//   const image = new Image({
//     data: req.file.buffer,
//     contentType: req.file.mimetype,
//   });

//   await image.save();
//   res.send('Image uploaded successfully!');
// });

// // Endpoint for retrieving an image
// app.get('/image/:id', async (req, res) => {
//   const image = await Image.findById(req.params.id);
//   res.set('Content-Type', image.contentType);
//   res.send(image.data);
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const { ServerSelectionError } = require('mongodb');

// const app = express();
// const port = 3000;

// // Replace 'your-mongodb-connection-string' with your actual MongoDB connection string
// const mongoURI = 'mongodb://localhost:27017';

// app.use(express.json());

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });

// // Your routes and other middleware here

// // Example route that may trigger a ServerSelectionError
// app.get('/example', async (req, res) => {
//   try {
//     // Your MongoDB code here
//     // For example, querying a collection
//     const result = await YourModel.find();
//     res.json(result);
//   } catch (error) {
//     if (error instanceof ServerSelectionError) {
//       console.error('Server selection error:', error);
//       res.status(500).send('Internal Server Error');
//     } else {
//       console.error('Other MongoDB error:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Replace 'your-mongodb-connection-string' with your actual MongoDB connection string
const mongoURI = 'mongodb://localhost:27017';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Middleware
app.use(express.json());

// Define routes or other middleware here

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
