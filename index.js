const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.send('Updated version 🚀');
});

app.get('/message', (req, res) => {
  res.send('Deployment successful at ${new Date(),toLocaleString()}🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
