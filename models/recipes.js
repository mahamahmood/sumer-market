const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const recipeSchema = new Schema({
    title: {type: String, required: true},
    img: {type: String, required: true},
    ingredients: {type: Array, required: true},
    tools: {type: Array, required: true},
    method: {type: String, required: true}
});

// Create Model from Recipe Schema
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export Recipe Model
module.exports = Recipe;