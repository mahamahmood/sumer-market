const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipes.js');


//==== All Routes ====//
// Index
router.get('/', (req, res) => {
    // res.send('Index Page');
    // Use Recipe model to get all Recipes
    Recipe.find({}, (error, allRecipes) => {
        res.render('recipes/Index', {
            recipes: allRecipes
        });
    });
});

// New
router.get('/new', (req, res) => {
    // res.send('new page');
    res.render('recipes/New');
});

// Delete
router.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id, (error, recipe) => {
        res.redirect('/recipes');
    });
});

// Update

// Create
router.post('/', (req, res) => {
    Recipe.create(req.body, (error, createdRecipe) => {
        res.redirect('/recipes');
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    Recipe.findById(req.params.id, (error, foundRecipe) => {
        res.render('recipes/Edit', {
            recipe: foundRecipe
        });
    });
});


// Show
router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id, (error, foundRecipe) => {
        res.render('recipes/Show', {
            recipe: foundRecipe
        });
    });
});

//==== End of All Routes ====//

// Export Router
module.exports = router;