const express = require('express');
const router = express.Router();
const controller =  require('../controllers/todoController');


// GET route
router.get('/tasks', controller.getTodo);

// create and save a task routes
router.get('/tasks/new', controller.createTodo);

router.post('/tasks', controller.saveTodo);

// Todo details page with GET route
router.get('/tasks/:id', controller.infoTodo);

// Routes for task updates
router.get('/tasks/:id/edit', controller.fetchTodo);

router.put('/tasks/:id', controller.updateTodo);

// DELETE route
router.delete('/tasks/:id', controller.deleteTodo);

module.exports = router;


