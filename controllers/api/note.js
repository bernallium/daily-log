const Note = require('../../models/note');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
};

// Get all notes
function index(req, res) {
    Note.find({}).then(allNotes => {
        res.status(200).json(allNotes);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Get a specific note
function show(req, res) {
    Note.findById(req.params.id).then(singleNote => {
        res.status(200).json(singleNote);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Create a note
function create(req, res) {
    Note.create(req.body).then(createdNote => {
        res.status(201).json(createdNote);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Update a note
function update(req, res) {
    Note.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}).then(updatedNote => {
        res.status(200).json(updatedNote);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Delete a note
function deleteOne(req, res) {
    Note.findByIdAndDelete(req.params.id).then(deletedNote => {
        res.status(200).json(deletedNote);
    }).catch(err => {
        res.status(400).json(err);
    })
}