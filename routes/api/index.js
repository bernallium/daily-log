const express = require('express');
const router = express.Router();

const taskRouter = require('./task');
const noteRouter = require('./note');
const dayRouter = require('./day');

router.use('/tasks', taskRouter);
router.use('/notes', noteRouter);
router.use('/days', dayRouter);

module.exports = router;