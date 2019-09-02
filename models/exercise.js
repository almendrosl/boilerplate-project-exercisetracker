const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    "description": { type: String, required: true },
    "duration": { type: Number, required: true },
    "date": { type: Date, default: Date.now }
});

module.exports = ExerciseSchema;