const express = require('express');
const router = express.Router();
const Product = require('../models/products');


//==== All Routes ====//
// Index
router.get('/', (req, res) => {
    res.send('Index Page');
});

// New
router.get('/new', (req, res) => {
    res.render('products/New');
});

// Delete/Destroy

// Update

// Create
router.post('/', (req, res) => {
    // Use model to create Product Document
    Product.create(req.body, (error, createProduct) => {
        // Once created - respond to client
        res.redirect('/products');
    });
});

// Edit

// Show


//==== End of All Routes ====//

// Export Router
module.exports = router;