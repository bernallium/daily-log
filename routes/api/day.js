const express = require('express');
const router = express.Router();

const dayCtrlr = require('../../controllers/api/note');

router.get('/', dayCtrlr.index); // Get all notes
router.post('/', dayCtrlr.create); // Create a note
router.get('/:id', dayCtrlr.show); // Get a single note
router.put('/:id', dayCtrlr.update); // Update a note
router.delete('/:id', dayCtrlr.delete); // Delete a note

module.exports = router;