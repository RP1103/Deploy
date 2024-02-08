const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer'); // Import multer
const database = require('./db/database');


mongoose.set('strictQuery', false);


// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
  () => {
    console.log('Database connected');
  },
  (error) => {
    console.log('Database not connected: ' + error);
  }
);

const carvingRoute = require('./routers/carving.route');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Define a storage destination for uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Store uploaded images in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename the file with a timestamp
  },
});

const upload = multer({ storage: storage });

// Add a route for image uploads
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // You can save the image details to the MongoDB database here
  // Example: Create a model and save the file details

  res.status(201).send('File uploaded.');
});

app.use('/api', carvingRoute);

const port = process.env.PORT || 3100;

app.listen(port, () => {
  console.log('PORT connected: ' + port);
});

app.use(function (error, req, res, next) {
  console.error(error.message);
  if (!error.statusCode) error.statusCode = 500;
  res.status(error.statusCode).send(error.message);
});
