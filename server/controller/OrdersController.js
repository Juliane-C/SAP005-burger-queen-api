const getAllOrders = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita pegando todos os pedidos.');
};

const createNewOrder = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para criar o pedido.');
};

const updateOrder = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para atualização de pedido.');
};

const getOrderById = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para pegar o produto pelo id.');
};

const deleteOrder = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para deletar o produto do banco.');
};

module.exports = {
  getAllOrders,
  createNewOrder,
  updateOrder,
  getOrderById,
  deleteOrder,
};
