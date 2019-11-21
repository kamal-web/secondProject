const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000', {useNewUrlParser: true}, (error) =>{
	if(!err) {console.log('Mongodb connection Succeeded') }
	else {console.log('Error in DB Connection:',+err)}
	});
	
	require('./employee.model');
