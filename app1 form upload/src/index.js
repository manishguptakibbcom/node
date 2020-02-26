const express = require('express');  
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');  
const upload = multer();
const app = express();

app.use(bodyParser.json() );                         // to support JSON-encoded bodies //
app.use(bodyParser.urlencoded({extended: true }));   // to support URL-encoded bodies  x-www-form-url-encode like simple html form without enctype//
app.use(upload.array());                             // for parsing multipart/form-data in postman. Like in a form enctype=multipart/form

const emps = [
				{
			        id: 1,
			        name: 'Manish ku',
			        mobno: '0123456789'
    			},
			    {
			        id: 2,
			        name: 'Kumar',
			        mobno: '9876543210'
			    },
			    {
			        id: 3,
			        name: 'Gupta',
			        mobno: '0123459876'
			    }
];

app.get("/",function(req, res){
    res.sendFile(`${__dirname}/form.html`)
});


app.get('/emp', function(req, res){
	res.send(emps);
});

app.post("/emp", function(req, res){
	console.log(req.body); 
	const emp = {
        id: emps.length + 1,
        name: req.body.name,
        mobno: req.body.mobno
    }
    emps.push(emp);
	return res.status(404).send(emps);
});

const port = process.env.port || 3000;
app.listen(port,function(req, res){
    console.log(`Server is running at port no ${port}`);
});

/*
	1)
	Raw Data => 
	{ 
		"name" : "Manish ku",
    	"mobno": "0123456789"
	}    

	2) form-data is like a form with enctype multipart-form data in html 

	3) x-www-form-url-encode like a normal form in html

	Here this code is handling all the things
*/






// admin - $2b$10$DUmT.QD/L6dW32p3PHx5WOwRQEehyOEAqP7S/tCx/W8E8q8s9WmPa //
// manish - $2b$10$3UfcNR5SPZk4aCUOjXj3YOgTKCnCo3GC3D/IMLXqaTQPncZSq09ti //