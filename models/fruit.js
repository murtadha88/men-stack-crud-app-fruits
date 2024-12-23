const mongoose = require('mongoose');

// 1. Create the schema
const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
});

// 2. Register the model
const Fruit = mongoose.model('Fruit', fruitSchema);

// 3. Share it with the rest of app (expore it)
module.exports = Fruit;