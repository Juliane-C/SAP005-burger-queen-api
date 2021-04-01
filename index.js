const express = require('express');
const routes = require('./server/routes/index');

const app = express();
const PORT = process.env.PORT || 4007;

app.use(express.json());
app.use('/', routes);

app.get('*', (req, res) => {
  res.send('Bem-Vindx a Hello Burguer API!');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
