// aqui vai o código que acessa o banco de dados
const Db = require('../db/models');

const getAllUsers = async (req, res) => {
  try {
    const usersAPI = await Db.Users.findAll({
      attributes: { exclude: ['password'] },
    });
    res.status(200).json(usersAPI);
  } catch (error) {
    res.status(400).json({ error: 'Opa! Tem algo de errado na requisição.' });
  }
};

const createNewUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, restaurant } = req.body;
    const newUser = await Db.Users.create({
      firstName,
      lastName,
      email,
      password,
      role,
      restaurant,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Opa! Não foi possível cadastrar o usuário.' });
  }
};

module.exports = { getAllUsers, createNewUser };

/* const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
    const upUser = await Db.Users.update(
      {
        firstName,
        lastName,
        email,
        password,
        role,
      },
      {
        where: {
          id: req.params.uid,
        },
      }
    );
    res.status(200).json(upUser);
  } catch (error) {
    res
      .status(400)
      .json({ error: 'Opa! Não foi possível atualizar o cadastro.' });
  }
}; */

/* static async getUserById(req, res) {
    const { idUser } = req.params;
    const userID = await db.Users.findAll({
      where: {
        id: Number(idUser),
      },
    });
    return res.status(200).json(userID);
  }

const deleteUser = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para deletar o usuário do banco');
};
 */
/* {updateUser,
  getUserById,
  deleteUser} */
