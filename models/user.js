const mongoose = require('mongoose');
const exerciseSchema = require('./exercise')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    exercises: [exerciseSchema]
});

module.exports = mongoose.model('User', UserSchema);