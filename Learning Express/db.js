const mongoose = require('mongoose')


const mongoURL = 'mongodb://localhost:27017/mydb'

mongoose.connect(mongoURL,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

//Defining the Event Listeners
db.on('connected', () => console.log('Connected to mongoDB server'))

db.on('error', (err) => {
    console.error('error in establishing connection:', err);
});

db.on('disconnected', () => console.log('DISCONNECTED'))


module.exports = db;
