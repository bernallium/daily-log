const express = require('express');
const router = express.Router();

const taskCtrlr = require('../../controllers/api/task');

router.get('/tasks', taskCtrlr.index); // Get all tasks
router.post('/tasks', taskCtrlr.create); // Create a task
router.get('/tasks/:id', taskCtrlr.show); // Get this task
router.put('/tasks/:id', taskCtrlr.update); // Update this task
router.delete('/tasks/:id', taskCtrlr.delete); // Delete this task
router.post('/days/:dayId/tasks', taskCtrlr.addToDay) // Adds a task to this day


module.exports = router;