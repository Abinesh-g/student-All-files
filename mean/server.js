const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');

app.use(bodyParser.json());

var corsOption = {
	origin: "http://localhost:4200",
	optionSuccessStatus: 200
}

app.use(cors(corsOption));


/*DEFAULT GET VALUE & CONNECTION*/
const demoCollection1 = mongoose.model ('democollection1', { name: String , email: String , password: String }) ;
mongoose.connect("mongodb://localhost:27017/student", {useNewUrlParser: true });

/*PROJECT GET VALUE & CONNECTION*/

const demoCollection = mongoose.model ('details', {
	NAME : String,
	REGISTER_NUMBER: String,
	DOB: String,
	GENDER: String,
	BLOOD_GROUP: String,
	AADHAR_CARD_NUMBER: String,
	BANK_ACCOUNT_NUMBER: String,
	STUDENT_CONTACT_NUMBER: String,
	POSTAL_ACCOUNT_NUMBER: String,
	RELIGION: String,
	CASTE: String,
	PLACE_OF_ARRIVAL: String,
	TRAVEL_MODE: String,
	NUMBER_OF_SIBLINGS: String,
	FATHER_NAME: String,
	MOTHER_NAME: String,
	FATHER_OCCUPATION: String,
	MOTHER_OCCUPATION: String,
	ANNUAL_INCOME: String,
	PARENT_EMAIL_ID: String,
	ADDRESS: String,
	PARENT_CONTACT_NUMBER: String,
	SCHOOL_NAME: String,
	TENTH_MARK: String,
	TENTH_PERCENTAGE: String,
	TENTH_BOARD: String,
	TWELTH_MARK: String,
	TWELTH_PERCENTAGE: String,
	TWELTH_BOARD: String,
	CUT_OF_MARK: String,
	DATE_OF_ADMISSION: String,
	FIRSTGRADUATE: String,
	QUOTA: String,
	SCHOLARSHIP: String,
	LAST_SEMESTER_CGPA: String
}) ;
mongoose.connect("mongodb://localhost:27017/student", {useNewUrlParser: true });



app.listen(3000, () =>{
	console.log('Server started');
});

app.get('/', (req, res) => {
	res.send("bingoo");
	console.log("bingoo");
});

app.get('/hello', (req, res) => {
	res.send("hello");
	console.log("hello");
});

/*app.get('/apicall', (req, res) => {
	console.log("apicall")
	var ourKitty = new cat();
	ourKitty.name = 'Black cat';
	ourKitty.save((err)=>
	{
		res.send(ourKitty);
	});
	res.send("apicall");
});
*/


/*app.all('/apivalue', (req, res) => {
	console.log('Inside app-all');
	console.log(req.body);
	console.log(req.method);
});
*/
/*app.use('/apivalue', (req, res) => {
	console.log('Inside app.use()');
	console.log('Value:', req.body);
	console.log('Request type:',req.method);
});
*/

app.use('/apivalue', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  //console.log('Inside app.use()');
  //console.log(req.body);
  next();
});

app.post('/apivalue',function (req, res) {
	console.log('Inside app.post()');
	//console.log(req);
    console.log('Request type:', req.method);
    console.log(req.body);

    var dbObject1 = new demoCollection1();
	dbObject1.name = req.body.userName;
	dbObject1.email = req.body.email;
	dbObject1.password = req.body.password;
	
	dbObject1.save((err)=>
	{
		res.send(dbObject1);
		console.log("---Added to DB---")
	});
});



//GET DETAILS

app.get('/getdetails/:userName', function(req, res) {
	console.log("inside getdetails "+req.params.userName);
	demoCollection.find({NAME: req.params.userName}, { NAME: 1,GENDER:1 ,DOB: 1}, function(err, docs) {
		if(err) 
			res.status(500).json(err);
		else if(docs)
		{
			console.log(docs);
			res.status(200).json({detailsList: docs});
			console.log("else if part");
		}
		else
			res.status(401).json({msg:"invalid"});
			//console.log("else part");
	})
})




app.use('/insert', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  //console.log('Inside app.use()');
  //console.log(req.body);
  next();
});

app.post('/insert',function (req, res) {
	//alert("inside server.js");
	console.log('Inside app.post()');
	//console.log(req);
    console.log('Request type:', req.method);
    console.log(req.body);

    var dbObject = new demoCollection();

    /*DEFAULT VALUE GET*/
	/*dbObject.name = req.body.userName;
	dbObject.email = req.body.email;
	dbObject.password = req.body.password;*/
	
	/*PROJECT VALUE GET*/
	dbObject.NAME = req.body.NAME;
	dbObject.REGISTER_NUMBER = req.body.REGISTER_NUMBER;
	dbObject.DOB = req.body.DOB;
	dbObject.GENDER = req.body.GENDER;
	dbObject.BLOOD_GROUP = req.body.BLOOD_GROUP;
	dbObject.AADHAR_CARD_NUMBER = req.body.AADHAR_CARD_NUMBER;
	dbObject.BANK_ACCOUNT_NUMBER = req.body.BANK_ACCOUNT_NUMBER;
	dbObject.STUDENT_CONTACT_NUMBER = req.body.STUDENT_CONTACT_NUMBER;
	dbObject.POSTAL_ACCOUNT_NUMBER = req.body.POSTAL_ACCOUNT_NUMBER;
	dbObject.RELIGION = req.body.RELIGION;
	dbObject.CASTE = req.body.CASTE;
	dbObject.PLACE_OF_ARRIVAL = req.body.PLACE_OF_ARRIVAL;
	dbObject.NUMBER_OF_SIBLINGS = req.body.TRAVEL_MODE;
	dbObject.FATHER_NAME = req.body.FATHER_NAME;
	dbObject.MOTHER_NAME = req.body.MOTHER_NAME;
	dbObject.FATHER_OCCUPATION = req.body.FATHER_OCCUPATION;
	dbObject.MOTHER_OCCUPATION = req.body.MOTHER_OCCUPATION;
	dbObject.ANNUAL_INCOME = req.body.ANNUAL_INCOME;
	dbObject.PARENT_EMAIL_ID = req.body.PARENT_EMAIL_ID;
	dbObject.ADDRESS = req.body.ADDRESS;
	dbObject.PARENT_CONTACT_NUMBER = req.body.PARENT_CONTACT_NUMBER;
	dbObject.SCHOOL_NAME = req.body.SCHOOL_NAME;
	dbObject.TENTH_MARK = req.body.TENTH_MARK;
	dbObject.TENTH_PERCENTAGE = req.body.TENTH_PERCENTAGE;
	dbObject.TENTH_BOARD = req.body.TENTH_BOARD;
	dbObject.TWELTH_MARK = req.body.TWELTH_MARK;
	dbObject.TWELTH_PERCENTAGE = req.body.TENTH_PERCENTAGE;
	dbObject.TWELTH_BOARD = req.body.TWELTH_BOARD;
	dbObject.CUT_OF_MARK = req.body.CUT_OF_MARK;
	dbObject.DATE_OF_ADMISSION = req.body.DATE_OF_ADMISSION;
	dbObject.FIRSTGRADUATE = req.body.FIRSTGRADUATE;
	dbObject.QUOTA = req.body.QUOTA;
	dbObject.SCHOLARSHIP = req.body.SCHOLARSHIP;
	dbObject.LAST_SEMESTER_CGPA = req.body.LAST_SEMESTER_CGPA;

	dbObject.save((err)=>
	{
		res.send(dbObject);
		console.log("---STUDENT DATA Added to DB---")
	});
});


/*INSERT SUBJECT SECTION*/



const subject = mongoose.model ('subject', {

 REGULATION: String ,
 DEPARTMENT: String ,
 SEMESTER: String ,
 TYPE: String ,
 SUB1: String ,
 SUB2: String ,
 SUB3: String ,
 SUB4: String ,
 SUB5: String ,
 SUB6: String 
}) ;

app.use('/subject', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  //console.log('Inside app.use()');
  //console.log(req.body);
  next();
});


app.post('/subject',function (req, res) {
	console.log('Inside app.post()');
	//console.log(req);
    console.log('Request type:', req.method);
    console.log(req.body);

    var dbObject2 = new subject();
/*
    dbObject2.REGULATION = req.body.REGULATION;
    dbObject2.DEPARTMENT = req.body.DEPARTMENT;
    dbObject2.SEMESTER = req.body.SEMESTER;*/

    dbObject2.TYPE = (req.body.REGULATION)+(req.body.DEPARTMENT)+(req.body.SEMESTER);

	dbObject2.SUB1 = req.body.SUB1;
	dbObject2.SUB2 = req.body.SUB2;
	dbObject2.SUB3 = req.body.SUB3;
	dbObject2.SUB4 = req.body.SUB4;
	dbObject2.SUB5 = req.body.SUB5;
	dbObject2.SUB6 = req.body.SUB6;
	
	dbObject2.save((err)=>
	{
		res.send(dbObject2);
		console.log("---SUBJECT ARE Added to DB---")
	});
});







const details1 = mongoose.model ('details1', {
	userName : String
 
}) ;

app.use('/get', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  //console.log('Inside app.use()');
  //console.log(req.body);
  next();
});


app.post('/get',function (req, res) {
	details1.findOne({userName:req.body.userName},
		{userName:1},(err, doc)=>{
			if(err)
				res.status(500).json(err);

		});
});
