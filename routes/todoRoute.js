const express = require('express');
const router = express.Router();
const controller =  require('../controllers/todoController');


// GET route
router.get('/tasks', controller.getTodo);

// // create and save a task routes
// router.get('/tasks/new', controller.createTodo);

router.post('/tasks/new', controller.saveTodo);

// GET single todo route
router.get('/tasks/:id', controller.singleTodo);

// // Routes for task updates
// router.get('/tasks/:id/edit', controller.fetchTodo);

// update todo route
router.put('/tasks/:id', controller.updateTodo);

// DELETE route
router.delete('/tasks/:id', controller.deleteTodo);

module.exports = router;


