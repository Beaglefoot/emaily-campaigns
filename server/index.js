const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

console.log(`express is running on PORT ${PORT}...`);
app.listen(PORT);