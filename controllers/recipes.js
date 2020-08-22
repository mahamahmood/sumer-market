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

// Delete

// Update

// Create

// Edit

// Show


//==== End of All Routes ====//

// Export Router
module.exports = router;