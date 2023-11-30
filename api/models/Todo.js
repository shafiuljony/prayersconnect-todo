const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        enum: ['TODO', 'IN-PROGRESS', 'DONE'],
        default: 'TODO',
        require: true
    },
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;