const express = require ('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

router.post('/favorite:productId', favoriteController.listFavoriteProducts);

module.exports = router;
