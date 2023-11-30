const todoService = require('../services/todo')
const error = require('../utils/error');


const getTodos = async (req, res, next) => {
    /**
     * not related to database 
     * TODO: filter, sort, pagination, select
     */
    try {

        const todos = await todoService.findTodos();
        
        return res.status(200).json(todos);
        
    } catch (e) {
      next(e)  
    }
};

const getTodoById = async (req, res, next) => {
    const {todoId} = req.params;

    try {
        const todo = await todoService.findTodoByProperty('_id', todoId)
        if(!todo){
            throw error('Todo not found', 404)
        }
        
        return res.status(200).json(todo);

    } catch (e) {
        next(e)
    }
};

const postTodo = async (req, res, next) => {
    const { title, description, status } = req.body;
    
    if (!title || !description || !status) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    try {
        const todo = await todoService.createNewTodo({
            title,
            description,
            status
        });
        return res.status(201).json(todo);
    } catch (e) {
        next(e);
    }
};


const putTodoById = async(req, res, next) => {
    const { todoId } = req.params;

    const {title, description, status } = req.body;

    try {
        const todo = await todoService.updateTodo(todoId, { title, description, status })

        if(!todo){
            throw error('Todo not found', 404)
        }

        return res.status(200).json(todo);
    } catch (e) {
        next(e);
    }
};

const deleteTodoById = async (req, res, next) => {
    const {todoId} = req.params;
    
    try {
        const todo = await todoService.findTodoByProperty('_id', todoId)

        if(!todo){
            throw error('Todo not found', 404)
        }
        await todo.deleteOne();
        return res.status(201).send();
    } catch (e) {
        next(e)     
    }
};

module.exports = {
    getTodoById,
    getTodos,
    postTodo,
    putTodoById,
    deleteTodoById
}