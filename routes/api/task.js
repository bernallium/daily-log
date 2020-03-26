var express = require('express');
var router = express.Router();

const taskCtrlr = require('../../controllers/api/task');

// Middleware to log the request URL
router.use('/', function(req, res, next) {
    console.log(req.originalUrl);
    next();
});

router.get('/', taskCtrlr.index); // Retrieve all tasks
router.post('/', taskCtrlr.create); // Add a task
router.get('/:id', taskCtrlr.show); // Retrieve a single task
router.put('/:id', taskCtrlr.update); // Update a task
router.delete('/:id', taskCtrlr.delete); // Delete a task

module.exports = router;