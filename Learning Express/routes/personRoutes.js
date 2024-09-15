const express = require('express')
const router = express.Router()
const Person = require('../models/Person')

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;

        if (workType == 'Frontend Developer' || workType == 'Backend Developer' || workType == 'DevOps Engineer') {
            const response = await Person.find({ work: workType });
            console.log('response fetched successfully');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Invalid work type" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});



//Fetching data from database
router.get('/', async (req, res) => {
    try{
        const fetchedData = await Person.find()
        console.log('data fetched successfully')
        res.status(200).send(fetchedData)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'server error'})
    }
})


//Adding data to the database
router.post('/', async (req, res) => {
    try{
     const data = req.body
     
     const newPerson = new Person(data)
 
     const response = await newPerson.save()
     console.log('data saved')
     res.status(200).json(response)
    }
 
    catch(err){
     console.log(err)
     res.status(500).json({error: 'server error'})
    }
 })


//Updating the data
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the id from the URL parameter
        const updatedPersonData = req.body; // Updated data for the person 

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
        });

        if (!response) {
            return res.status(404).json({ error: 'Person_ID not found!' });
        }

        console.log('Data updated');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Deleting a document from DB

router.delete('/:id', async (req, res) => {
    try {
        const documentId = req.params.id;

        const response = await Person.findByIdAndDelete(documentId);

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