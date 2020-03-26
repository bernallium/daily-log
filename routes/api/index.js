const express = require('express');
const router = express.Router();

const taskRouter = require('./task');
const noteRouter = require('./note');
//const dayRouter = require('./day');

router.use('/task', taskRouter);
router.use('/note', noteRouter);
//router.use('/day', dayRouter);

module.exports = router;