const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
	empId:{
		type:String
	},
	fullName:{
		type:String
	},
	email:{
		type:String
	},
	mobile:{
		type:String
	},
	department:{
		type:String
	},
	designation:{
		type:String
	},
	salary:{
		type:String
	}
	
});

mongoose.model('Employee',employeeSchema);
