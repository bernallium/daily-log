const express = require('express');
const router = express.Router();

const dayRouter = require('./day');
//const noteRouter = require('./note');
const taskRouter = require('./task');

router.use('/days', dayRouter);
// router.use('/notes', noteRouter);
router.use('/', taskRouter);

module.exports = router;