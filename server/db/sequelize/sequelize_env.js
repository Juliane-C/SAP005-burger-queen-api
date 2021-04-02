// conexão do Sequelize com a variável de ambiente.

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

// confirmação de conexão
sequelize
  .authenticate()
  .then(() => console.log('Conexão realizada com sucesso.'))
  .catch((err) => console.error('Opa! Algo não deu certo na conexão.', err));

module.exports = sequelize;
