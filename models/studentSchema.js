const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		contactNumber: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
