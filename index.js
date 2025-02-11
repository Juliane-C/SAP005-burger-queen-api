// eslint-disable-next-line import/no-unresolved
require('dotenv').config(); // chama a variável de ambiente.
const express = require('express');
const routes = require('./server/routes/index');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 7003;

// app.use(cors());

app.use(express.json());
app.use('/', routes);

app.get('*', (req, res) => {
  res.send('Bem-Vindx a Hello Burguer API!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
