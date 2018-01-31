const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "missing name"],
        minlength: 3,
        maxlength: 20
    },
    type: {
        type: String,
        required: [true, "missing pet type"],
        minlength: 3,
        maxlength: 20
    },
    description: {
        type: String,
        required: [true, "missing description"],
        minlength: 3,
        maxlength: 200
    },
    skill1: {
        type: String,
        maxlength: 50
    },
    skill2: {
        type: String,
        maxlength: 50
    },
    skill3: {
        type: String,
        maxlength: 50
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    }
}, { timestamps: true });

var Pet = mongoose.model('Pet', PetSchema);