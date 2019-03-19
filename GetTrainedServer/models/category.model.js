const mongoose = require('mongoose');

let categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: 'Category name cannot be empty'
    },
    active: {
        type: String,
        default: 'true'
    }
});

mongoose.model('Categories', categorySchema);