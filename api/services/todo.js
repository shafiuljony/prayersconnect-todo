const Todo = require('../models/Todo');

const findTodos = () => {
    return Todo.find();
}

const findTodoByProperty = (key, value) => {
    if( key === '_id'){
        return Todo.findById(value)
    }
    return Todo.findOne({ [key]: value })
}
const createNewTodo = ({ title, description, status }) => {
    const todo = new Todo({
        title, 
        description, 
        status
    })
    return todo.save();
}

const updateTodo = async (id, data) => {
    const todo = await findTodoByProperty('data', data)
    if(todo){
        throw error('Email already Used', 400)
    }
    return Todo.findByIdAndUpdate(id, {...data}, {new: true})
}

module.exports = {
    findTodoByProperty,
    createNewTodo,
    findTodos,
    updateTodo
}