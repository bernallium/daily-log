const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema(
    {
    content: 
    {
        type: String
    },
    label: 
    {
        type: String
    }
    }
);

const daySchema = new Schema(
    {
    date: {type: Date},
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
    notes: [noteSchema],
    },
    {
    timestamps: true
    }
);  

module.exports = mongoose.model('Day', daySchema, 'day');