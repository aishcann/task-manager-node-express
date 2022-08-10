const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	name: {
		//validators
		type: String,
		required: [true, 'must provide name'],
		//trim will remove whitespaces from beginning and end
		trim: true,
		maxlength: [20, 'name cannot be more than 20 characters'],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('Task', TaskSchema);

//only properties set in the schema will be passed to the database. This is due to Mongoose!
