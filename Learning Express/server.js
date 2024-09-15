const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Rohan Sharma")
})

app.get('/getFirstName', (req, res) => {
    res.send("My First name is Rohan")
})

app.get('/getAge', (req, res) => {
    res.send("My age is 20")
})


const personRoutes = require('./routes/personRoutes')
const educationRoutes = require('./routes/educationRoutes')

app.use('/person', personRoutes)
app.use('/education', educationRoutes)

app.listen(3000, () => 
    console.log(('Listening on http://localhost:3000'))
)