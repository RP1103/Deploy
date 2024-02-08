const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/worklogs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const worklogSchema = new mongoose.Schema({
  date: String,
  name: String,
  checkIn: String,
  checkOut: String,
  totalHours: String,
  description: String
}, { versionKey: false });

const Worklog = mongoose.model('Worklog', worklogSchema);

// Retrieve all worklog entries
app.get('/worklogEntries', async (req, res) => {
  try {
    const entries = await Worklog.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add multiple worklog entries
app.post('/api/worklogs', async (req, res) => {
  console.log('Request Body:', req.body);

  try {
    const entries = req.body;
    const insertedEntries = await Worklog.insertMany(entries);
    res.status(201).json({ message: 'Worklogs created successfully', entries: insertedEntries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});