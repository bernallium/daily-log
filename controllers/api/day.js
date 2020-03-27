const Day = require('../../models/day');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteDay,
    indexNote,
    createNote,
    showNote,
    updateNote,
    deleteNote
};

//
// ─── DAY FUNCTIONS ──────────────────────────────────────────────────────────────
//

// Get all days
function index(req, res) {
    Day.find({}).then(allDays => {
        res.status(200).json(allDays);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Get a specific day
function show(req, res) {
    Day.findById(req.params.id).then(day => {
        res.status(200).json(day);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Create a day
function create(req, res) {
    Day.create(req.body).then(createdDay => {
        res.status(201).json(createdDay);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Update a day
function update(req, res) {
    Day.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}).then(updatedDay => {
        res.status(200).json(updatedDay);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Delete a day
function deleteDay(req, res) {
    Day.findByIdAndDelete(req.params.id).then(deletedDay => {
        res.sendStatus(200);
    }).catch(err => {
        res.status(400).json(err);
    })
}

//
// ─── NOTE FUNCTIONS ─────────────────────────────────────────────────────────────
//

// Get all notes from this day
function indexNote(req, res) {
    Day.findById(req.params.dayId).then(day => {
        res.status(201).json(day.notes);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Get a specific note from this day
function showNote(req, res) {
    Day.findById(req.params.dayId).then(day => {
        const noteToShow = day.notes.id(req.params.id);
        res.status(201).json(noteToShow);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Create a note for this day
function createNote(req, res) {
    Day.findById(req.params.dayId).then(day => {
        day.notes.push(req.body);
        day.save();
        res.status(201).json(day);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Update a note from this day
function updateNote(req, res) {
    Day.findById(req.params.dayId).then(day => {
        const noteToUpdate = day.notes.id(req.params.id);
        noteToUpdate.set(req.body);
        day.save();
        res.status(200).json(noteToUpdate);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Delete a note from this day
function deleteNote(req, res) {
    Day.findById(req.params.dayId).then(day => {
        day.notes.id(req.params.id).remove();
        day.save();
        res.sendStatus(200);
    }).catch(err => {
        res.status(400).json(err);
    });
}