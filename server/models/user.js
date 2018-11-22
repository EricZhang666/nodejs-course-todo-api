const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email:{
        type: String,
        required: true,
        trim: true,
        minlength:5
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 6
    }
});

module.exports = {User};