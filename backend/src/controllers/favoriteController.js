const { PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const listFavoriteProducts = async (req, res) => {
    const { productId } = req.params;

    try {
        await prisma.favorite.create({
            data: {
                productId: parseInt(productId),
            }
        });

        res.status(200).send('Produto favoritado com sucesso');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao favoritar o produto');
    }
};

module.exports = {
    listFavoriteProducts,
}


