require('dotenv/config');
const express = require('express');
const api = require('./api');

const PORT = process.env.PORT || 8080;
const app = express();

app.use('/api', api);

app.listen(PORT, err => {
  if (err) console.error('Server initialisation error', err.stack);

  console.log(`> Ready on http://localhost:${PORT}`);
});
