const produtoModel = require('../models/produtoModel');

const getAll = async (request, response) => {
    const produto = await produtoModel.getAll();
    return response.status(200).json(produto);
};

module.exports = {
    getAll
};