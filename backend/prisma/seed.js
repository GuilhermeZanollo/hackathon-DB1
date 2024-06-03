const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seed = async () => {
    // Products //
    const product = await prisma.products.create({
        data: {
            name: "Tênis Adidas",
            description: "TESTE DESCRIÇÃO",
            price: 199.99,
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-futsal-kappa-phoenix-unissex/08/D24-5692-108/D24-5692-108_zoom1.jpg?ts=1697558034&ims=652x",
        },
    });

    console.log("teste")
    // Products //

}

seed()
    .catch((error) => {
        console.error("Error creating data:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });