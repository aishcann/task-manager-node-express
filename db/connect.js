const mongoose = require('mongoose');

const connectDB = (url) => {
	return mongoose.connect(url, {
		// do not need these in later version of Mongoose
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});
};

module.exports = connectDB; 
