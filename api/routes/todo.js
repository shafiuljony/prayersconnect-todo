
const router = require('express').Router()
const todoController = require('../controller/todo')

/**
 * Get todo by id 
 * route parameters/ url parameters
 */
router.get('/:todoId', todoController.getTodoById)


/**
 * Update todo by id
 *@method PUT
 * Update full data 
 */
router.put('/:todoId', todoController.putTodoById)

/**
 * Delete todo by id
 *@method PUT
 */
router.delete('/:todoId', todoController.deleteTodoById)



/**
 * Get all todos, include
 * - filter
 * - sort
 * - pagination
 * - select properties
 * @route /api/v1/todos?sort={"by", "name"}
 * @method GET 
 * @visibility Private
 * comment all the route
 */
router.get('/', todoController.getTodos);



/**
 * Create a Todo Route
 */
router.post('/', todoController.postTodo)




module.exports = router;