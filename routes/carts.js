const express = require('express');
const router = express.Router();


let carts = [];
let nextCartId = 1;


router.post('/', (req, res) => {
    const newCart = {
        id: nextCartId++, // Autogenerar ID
        products: []
    };

    carts.push(newCart);
    res.status(201).json(newCart);
});


router.get('/:cid', (req, res) => {
    const cart = carts.find(c => c.id === parseInt(req.params.cid));
    if (cart) {
        res.json(cart.products);
    } else {
        res.status(404).json({ message: 'Carrito no encontrado' });
    }
});


router.post('/:cid/product/:pid', (req, res) => {
    const cart = carts.find(c => c.id === parseInt(req.params.cid));
    if (!cart) {
        return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    const { quantity } = req
