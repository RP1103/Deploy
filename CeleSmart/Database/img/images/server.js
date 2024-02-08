 // server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/ProductsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

const Image = mongoose.model('Image', { data: Buffer, contentType: String });

// Add this route to fetch all images
app.get('/api/images', async (req, res) => {
  try {
    const images = await Image.find({});
    const imageList = images.map(image => ({
      id: image._id,
      contentType: image.contentType,
      data: `data:${image.contentType};base64,${image.data.toString('base64')}`,
    }));

    res.json(imageList);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
