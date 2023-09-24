const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8080;

const cors = require('cors');
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(cors());

const videosDetailed = JSON.parse(
  fs.readFileSync(`./assets/data/video-details.json`)
);
app.get('/', (req, res) => {
  res.status(200).json(videosDetailed);
});

app.get('/videos/:id', (req, res) => {
  const id = req.params.id;
  const video = videosDetailed.find((el) => el.id === id);
  res.status(200).json(video);
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
