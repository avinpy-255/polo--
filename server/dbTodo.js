const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      
    },
    completed: {
        type: Boolean,
        default: false
    },
    
}, {timestamp: true})

module.exports = mongoose.model('todos', todoSchema);


