// aqui vai o código que acessa o banco de dados
const db = require('../db/models/users');

class UsersController {
  static async getAllUsers(req, res) {
    const usersAPI = await db.Users.findAll({
      attributes: { exclude: ['password'] },
    });
    return res.status(200).json(usersAPI);
  }

  /* static async getUserById(req, res) {
    const { idUser } = req.params;
    const userID = await db.Users.findAll({
      where: {
        id: Number(idUser),
      },
    });
    return res.status(200).json(userID);
  } */
}

/* const createNewUser = (req, res) => {
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
 */

module.exports = UsersController;

/* {createNewUser,
  updateUser,
  getUserById,
  deleteUser,} */
