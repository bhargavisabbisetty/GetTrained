const mongoose = require('mongoose');

//const bcrypt = require('bcryptjs');

//defining the user schema
var userSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: '',
        unique: true
    },
    first_name:{
        type: String,
        required: 'First Name cannot be empty'
    },
    last_name: {
        type: String,
        required: 'Last Name cannot be empty'
    },
    email: {
        type: String,
        required: 'Email address cannot be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password cannot be empty',
        minlength: [6, 'Password must be 6 or more characters long']
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    temporary_token: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    courses_created: [{
        course_id: {
            type: String
        }
    }],
    courses_enrolled: [{
            course_id: {
                type: String
            },
            score: {
                type: Number
            },
            progress: {
                type: Number
            },
            lastSlideIndex: {
                type: Number
            }
        }]
});

//Validation for email on back end.

userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('User', userSchema);