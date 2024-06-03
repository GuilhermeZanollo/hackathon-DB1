const express = require ('express');
const app = express(); //Inicializa instância do Express para configurar servidor
const cors = require ('cors'); //Biblioteca que permite seu servidor lide com requisições de diferentes dominios
const productRoute = require("./router/product");
const favoriteRoute = require("./router/favorite");

app.use("/product", productRoute); //Caminho de roteamento para /product , na qual serão tratadas pelo "productRoute"
app.use("/favorite/productId", favoriteRoute); //Caminho de roteamento para /favorite , na qual serão tratadas pelo "favoriteRoute"
app.use(cors());

app.listen(3000, () => { //Inicia servidor 3000
    console.log('Servidor rodando na porta 3000');
});