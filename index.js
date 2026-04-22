const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.send('Updated version 🚀');
});

app.get('/message', (req, res) => {
  res.send('Hello from DevOps 🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
