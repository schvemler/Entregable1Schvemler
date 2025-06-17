const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Lista de carritos');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Detalles del carrito ${id}`);
});

module.exports = router;
