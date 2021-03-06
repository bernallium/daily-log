const Task = require('../../models/task');
const Day = require('../../models/day');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne,
    addToDay
};

// Get all tasks
function index(req, res) {
    Task.find({}).then(allTasks => {
        res.status(200).json(allTasks);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Get a specific task
function show(req, res) {
    Task.findById(req.params.id).then(task => {
        res.status(200).json(task);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Create a task
function create(req, res) {
    Task.create(req.body).then(createdTask => {
        res.status(201).json(createdTask);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Update a task
function update(req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}).then(updatedTask => {
        res.status(200).json(updatedTask);
    }).catch(err => {
        res.status(400).json(err);
    });
}

// Delete a task
function deleteOne(req, res) {
    Task.findByIdAndDelete(req.params.id).then(deletedTask => {
        res.status(200).json(deletedTask);
    }).catch(err => {
        res.status(400).json(err);
    })
}

async function addToDay(req, res) {
    try {
        const task = await (await Task.create(req.body)).populate('tasks');
        const day = await (await Day.findById(req.params.dayId)).populate('tasks');
        day.tasks.push(json(task));
        day.populate('tasks');
        res.status(200).json(task);
    } catch(err) {
        res.status(400).json(err);
    }
}