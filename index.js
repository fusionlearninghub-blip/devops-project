const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.send('I just completed a project on CI/CD using local server on Github 🚀');
});

app.get('/message', (req, res) => {
  res.send('Deployment successful at ${new Date(),toLocaleString()}🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
