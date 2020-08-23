const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const recipeSchema = new Schema({
    title: {type: String, required: true},
    img: {type: String, required: true},
    ingredients: {type: String, required: true},
    tools: {type: String, required: true},
    method: {type: String, required: true}
},{ timestamps: true });

// Create Model from Recipe Schema
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export Recipe Model
module.exports = Recipe;

//look into makeing the ingredients and tools to be arrays.