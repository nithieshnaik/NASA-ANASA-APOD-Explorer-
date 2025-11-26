require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const apod = require('./apodService');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/apod/today', async (req, res) => {
  try {
    res.json({ success: true, data: await apod.getToday() });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/apod/date', async (req, res) => {
  try {
    res.json({ success: true, data: await apod.getByDate(req.query.date) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/apod/range', async (req, res) => {
  try {
    res.json({ success: true, data: await apod.getRange(req.query.start, req.query.end) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
