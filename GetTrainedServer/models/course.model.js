const mongoose = require('mongoose');

let courseSchema = new mongoose.Schema({
    course_title: {
        type: String,
        required: 'Course title is required.'
    },
    course_description: {
        type: String,
        required: 'Course description is required.'
    },
    course_category: {
        type: String,
        required: 'Course Category is required.'
    },
    course_learners: [{
        type: String,
    }],
    course_created_date: {
        type: Date,
        default: Date.now
    },
    course_modified_date: {
        type: Date,
    },
    course_created_by: {
        type: String,
    },
    course_status: {
        type: String,
    },
    course_contents: [{
        title: {
            type: String,
            required: true
        },
        content: [{
            type: String
        }],
        image: {
            type: String
        },
        video: {
            type: Object
        }
    }],
});

mongoose.model('Courses', courseSchema);


