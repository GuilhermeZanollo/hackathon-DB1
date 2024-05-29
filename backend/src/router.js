const express = require('express');
const produtoController = require('./controllers/produtoController')

const router = express.Router();

router.get('/produto', produtoController.getAll);

module.exports = router;