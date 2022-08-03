//require express
const express = require('express')
//initialize express
const app = express()

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

const port = 3000

app.listen(port, console.log(`listening on ${port}...`))