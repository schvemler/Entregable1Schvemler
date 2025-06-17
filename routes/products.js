const express = require('express');
const router = express.Router();

let products = [];
let nextId = 1;

router.get('/', (req, res) => {
    res.json(products);
});


router.get('/:pid', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.pid));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
});


router.post('/', (req, res) => {
    const { title, description, code, price, status, stock, category, thumbnails } = req.body;

    const newProduct = {
        id: nextId++, 
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnails
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});


router.put('/:pid', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.pid));
    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }

    const { title, description, code, price, status, stock, category, thumbnails } = req.body;

    // Actualizar solo los campos permitidos
    if (title !== undefined) product.title = title;
    if (description !== undefined)
