const express = require('express');
const router = express.Router();
const Product = require('../models/products');


//==== All Routes ====//
// Index
router.get('/', (req, res) => {
    // res.send('Index Page');
    Product.find({}, (error, allProducts) => {
        res.render('products/Index', {
            products: allProducts
        });
    });
});

// New
router.get('/new', (req, res) => {
    res.render('products/New');
});

// Delete/Destroy
router.delete('/:id', (req, res) => {
    // Delete a document from the collection
    Product.findByIdAndRemove(req.params.id, (error, prodcut)=>{
        res.redirect('/products');
    });
});

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
router.get('/:id/edit', (req, res) => {
    // res.send('edit page!!')
    // Find the document in the collection using mongoose model
    Product.findById(req.params.id, (error, foundProduct) => {
        // Render the eidt view and pass it the found product
        res.render('products/Edit', {
            product: foundProduct
        });
    });
});


// Show
router.get('/:id', (req, res) => {
    // Find the requested document
    Product.findById(req.params.id, (error, foundProduct) => {
        // Send the Show route and pass it foundProduct
        res.render('products/Show', {
            product: foundProduct
        });
    });
});

//==== End of All Routes ====//

// Export Router
module.exports = router;