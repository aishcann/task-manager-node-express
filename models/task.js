const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

module.exports = mongoose.model('Task', TaskSchema)

//only properties set in the schema will be passed to the database. This is due to Mongoose!