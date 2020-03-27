const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {type: String},
    note: {type: String, required: true}, 
    label: {type: String}
},
    {
        timestamps: true
    }
); 

const daySchema = new Schema({
    date: {type: Date, default: Date.now, required: 'Path \'date\' is required - default value is the current date'},
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
    notes: [noteSchema],
},
    {
    timestamps: true
    }
);  

module.exports = mongoose.model('Day', daySchema, 'day');