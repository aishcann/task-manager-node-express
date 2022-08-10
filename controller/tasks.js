const Task = require('./../models/task');

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		//will print out the error message in json format according to how I've designed it (what's in the schema and what is below)
		res.status(500).json({ msg: error });
	}
};

const getTask = async (req, res) => {
	try {
        // grab the id from req.params
		const { id: taskID } = req.params;
        // find the specific task using findOne()
		const task = await Task.findOne({ _id: taskID });
        // set a handler for if the id is incorrect
        // important that this is set BEFORE sending the res.status(200) message so it can catch the mistake before sending back a null task
		if (!task) {
			return res.status(404).json({ msg: `No task with id : ${taskID}` });
		}
        // if the id is found return the task
        res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const updateTask = (req, res) => {
	res.send('update task');
};

const deleteTask = (req, res) => {
	res.send('delete task');
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
