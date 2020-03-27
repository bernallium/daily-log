const express = require('express');
const router = express.Router();

const dayCtrlr = require('../../controllers/api/day');

//
// ─── DAY ROUTES ─────────────────────────────────────────────────────────
//
router.get('/', dayCtrlr.index); // Get all days
router.post('/', dayCtrlr.create); // Create a day
router.get('/:id', dayCtrlr.show); // Get this day
router.put('/:id', dayCtrlr.update); // Update this day
router.delete('/:id', dayCtrlr.delete); // Delete this day

// TODO: /:year/:month/:day

//
// ─── NOTE ROUTES ────────────────────────────────────────────────────────
//

router.get('/:dayId/notes', dayCtrlr.indexNote); // Get all notes from this day
router.post('/:dayId/notes', dayCtrlr.createNote); // Create a note for this day
router.get('/:dayId/notes/:id', dayCtrlr.showNote); // Get specific note from this day
router.put('/:dayId/notes/:id', dayCtrlr.updateNote); // Update a note from this day
router.delete('/:dayId/notes/:id', dayCtrlr.deleteNote); // Delete a note from this day day

// ────────────────────────────────────────────────────────────────────────────────

module.exports = router;