const app = require('./app');
// const express = require('express');
// const app = express();

const port = 8000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
