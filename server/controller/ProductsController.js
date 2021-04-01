const getAllProducts = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita pegando todos os produtos');
};

const createNewProduct = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para criar produto');
};

const updateProduct = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para atualização de produto');
};

const getProductById = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para pegar o produto pelo id.');
};

const deleteProduct = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request feita para deletar o produto do banco');
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  getProductById,
  deleteProduct,
};
