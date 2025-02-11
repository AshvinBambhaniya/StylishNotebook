const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

// Available Routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
    console.log(`Example app listening on port at http://${host}:${port}`)
})
