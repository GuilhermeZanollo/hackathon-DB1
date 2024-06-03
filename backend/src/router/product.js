const express = require ('express'); //Importando módulo Express
const router = express.Router(); //Instanciando roteador do Express
const productController = require('../controllers/productController'); // Instanciando productController

router.get('/', productController.listProducts); // define rota HTTP GET, quando a requisição é feita a função list products é chamada pelo controller

module.exports = router; //Exporta roteador