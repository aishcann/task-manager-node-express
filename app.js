const express = require('express')
//initialize express
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
//allows us to use our secret environment variables
require('dotenv').config()

//middleware

app.use(express.json())

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
}) 

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
    try {
        //will start teh server is connection is successful
        //accessing secret environment variable
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`listening on ${port}...`));
    } catch (error) {
        // will show an error if the connection is unsuccessful 
        console.log(error)
    }
}

start()