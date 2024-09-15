const express = require('express')
const router = express.Router()
const Education = require('../models/Education')

router.post('/', async (req, res) => {
    try{
        const data = req.body
        const newEducation = new Education(data)

        const response = await newEducation.save()
        console.log('data saved')
        res.status(200).json(response)
       }

       catch(err){
        console.log(err)
        res.status(500).json({error: 'server error'})
       }
})

router.get('/', async (req, res) => {
    try{
        const fetchedData = await Education.find()
        console.log('data fetched successfully')
        res.status(200).send(fetchedData)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'server error'})
    }
})

//Updating the data
router.put('/:id', async (req, res) => {
    try {
        const educationId = req.params.id; // Extract the id from the URL parameter
        const updatedPersonData = req.body; // Updated data for the person 

        const response = await Education.findByIdAndUpdate(educationId, updatedPersonData, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
        });

        if (!response) {
            return res.status(404).json({ error: 'Record not found!' });
        }

        console.log('Data updated');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const documentId = req.params.id;

        const response = await Education.findByIdAndDelete(documentId);

        if (!response) {
            return res.status(404).json({ error: 'Record not found!' });
        }

        return res.status(200).json({ message: 'Record deleted successfully!' });
    } catch (err) {
        console.log(err);

        return res.status(500).json({ error: 'Server error!' });
    }
})

module.exports = router