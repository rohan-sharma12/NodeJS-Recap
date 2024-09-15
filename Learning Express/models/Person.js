const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },

    age:{
        type: Number
    },

    work: {
        type: String,
        enum: ['Frontend Developer', 'Backend Developer', 'DevOps Engineer'],
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    address:{
        type: String
    },

    salary:{
        type: Number
    }
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person