const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    user:{
        type: String,
        required: true,
        minlength:5,
        trim:true
    },
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};