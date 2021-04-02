// eslint-disable-next-line import/no-unresolved
require('dotent').config(); // chama as variaveis de ambiente mesmo sem subir a pasta.

const express = require('express');
const routes = require('./server/routes/index');
// const cors = require('cors');

const app = express();
const port = process.env.port || 3007;

// app.use(cors());

app.use(express.json());
app.use('/', routes);

/* app.get('*', (req, res) => {
  res.send('Bem-Vindx a Hello Burguer API!');
}); */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
