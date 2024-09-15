const express = require('express')
const app = express()
const db = require('./db')
const Person = require('./models/Person')
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.send("Rohan Sharma")
})


app.get('/getFirstName', (req, res) => {
    res.send("My First name is Rohan")
})


app.get('/getAge', (req, res) => {
    res.send("My age is 20")
})

app.use(bodyParser.json())


//Adding data to the database
app.post('/person', async (req, res) => {
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


//Fetching data from database
app.get('/person', async (req, res) => {
    try{
        const fetchedData = await Person.find()
        console.log('data fetched successfully')
        res.status(200).send(fetchedData)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'server error'})
    }
})
app.listen(3000, () => 
    console.log(('Listening on http://localhost:3000'))
)