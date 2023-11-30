const route = require('express').Router();
const todoRoute = require('./todo');

route.use('/api/v1/todos', todoRoute);

module.exports = route;
