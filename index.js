const express = require('express');
const routes = require('./server/routes/index');

const app = express();
const port = 4000;

app.use('/', routes);

app.get('*', (req, res) => {
  res.send('Bem-Vindx a Hello Burguer API!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
