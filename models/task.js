const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
    content: {type: String, required},
    completed: {type: Boolean, default: false},
    priority: {type: Number, enum: [0, 1, 2], default: 1} // 2 is the highest priority
    },
    {
    timestamps: true
    }
);  

module.exports = mongoose.model('Task', taskSchema, 'task');