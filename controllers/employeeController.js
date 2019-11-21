const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req,res) => {
	console.log('Getting Info');
});

router.post('/', (req,res) => {
	var employee =  new Employee();
	employee.id = req.id;
	employee.fullName = req.fullname;
	employee.mobile = req.mobile;
	employee.department = req.department;
	employee.designation = req.designation;
	employee.salary = req.salary;
	
	employee.save((err,doc) => {
		if(!err)
			res.resirect('employee/list');
		else{
			console.log('Error during record insertion:'+err);
		}
	});
	
});

router.get('/list', (req,res) => {
	console.log('Getting Info');
});



module.exports = router;
