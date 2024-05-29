const connection = require('./connection');

const getAll = async () => {
    const produto = await connection.execute('SELECT * FROM produto');
    return produto[0];
};

module.exports = {
    getAll
};