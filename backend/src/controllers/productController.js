const { PrismaClient} = require("@prisma/client"); //Importa Prisma client (interação com banco de dados)
const prisma = new PrismaClient();  //Instância do Prisma Client

const listProducts = async (req, res) => { //Controla as requisições, função assíncrona para manipular a rota
    const products = await prisma.products.findMany(); //Busca todos os registros da tabela "products"
    res.json(products); // Envia resposta como um JSON (lista de product)
};

module.exports = {listProducts} // Exporta função list products
