// Code Generated by Sidekick is for learning and experimentation purposes only.
const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hey! this is chaos test app');
  res.send('Running perfectly')
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
