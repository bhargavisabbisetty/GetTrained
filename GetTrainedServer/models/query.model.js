const mongoose = require('mongoose');

var querySchema = new mongoose.Schema({
    query_title:{
        type: String,
        required: 'Query title cannot be empty'
    },
    query_content: {
        type: String,
        required: 'Query content cannot be empty'
    },
    query_type: {
        type: String,
        required: 'Query type cannot be empty'
    },
    query_createdby:{
        type: String
    }
});


mongoose.model('Queries', querySchema);