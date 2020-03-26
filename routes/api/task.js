const express = require('express');
const router = express.Router();

const taskCtrlr = require('../../controllers/api/task');

router.get('/', taskCtrlr.index); // Get all tasks
router.post('/', taskCtrlr.create); // Create a task
router.get('/:id', taskCtrlr.show); // Get a single task
router.put('/:id', taskCtrlr.update); // Update a task
router.delete('/:id', taskCtrlr.delete); // Delete a task

module.exports = router;