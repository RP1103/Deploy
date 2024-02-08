const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = require('./router');

mongoose.connect('mongodb://127.0.0.1:27017/ProductsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.log('Database connection error', error);
});

app.use(express.json());
app.use(cors());
app.use('/api',router)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

// server.js (or your server entry point file)

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const app = express();

// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Define a User model (this is a simple example, adjust it based on your needs)
// const User = mongoose.model('User', {
//   name: String,
//   phoneNumber: String,
//   // Add more fields if needed
// });

// // API endpoint for login
// app.post('/api/login', (req, res) => {
//   const { name, phoneNumber } = req.body;

//   // Example: Perform authentication logic (check against the database)
//   User.findOne({ name, phoneNumber }, (err, user) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }

//     if (user) {
//       // User found, authentication successful
//       return res.json({ success: true, message: 'Login successful' });
//     } else {
//       // User not found, authentication failed
//       return res.status(401).json({ success: false, message: 'Invalid credentials' });
//     }
//   });
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


