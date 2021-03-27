// aqui vai o código que acessa o banco de dados

const getAllUsers = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita pegando todos os usuários');
};

const createNewUser = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para criar usuário');
};

const updateUser = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para atualização de usuário');
};

const getUserById = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para pegar o usuário pelo id.');
};

const deleteUser = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para deletar o usuário do banco');
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  getUserById,
  deleteUser,
};
