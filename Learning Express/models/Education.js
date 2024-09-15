const mongoose = require('mongoose');
    
const eduSchema = new mongoose.Schema({
    regno: {
        type: String,
        required: true,
        unique: true
    },

    college: {
        name: {           
            type: String,
            required: true
        },
        cgpa: {
            type: Number,
            required: true
        }
    },

    highschool: {
        name: {          
            type: String,
            required: true
        },
        cgpa: {
            type: Number,
            required: true
        }
    },
});

const Education = mongoose.model('Education', eduSchema)

module.exports = Education