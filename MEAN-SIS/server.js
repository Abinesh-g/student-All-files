const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(bodyParser.json());

var corsOption = {
	origin: "http://localhost:4200",
	optionSuccessStatus: 200
}

app.use(cors(corsOption));
const mChat = require('./models/musers').user;


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

app.get('/getdetails/:REGISTER_NUMBER', function(req, res) {
	console.log("inside getdetails "+req.params.REGISTER_NUMBER);
	demoCollection.find({REGISTER_NUMBER: req.params.REGISTER_NUMBER}, {

	NAME : 1,
	REGISTER_NUMBER: 1,
	DOB: 1,
	GENDER:1,
	BLOOD_GROUP:1,
	AADHAR_CARD_NUMBER:1,
	BANK_ACCOUNT_NUMBER:1,
	STUDENT_CONTACT_NUMBER:1,
	POSTAL_ACCOUNT_NUMBER: 1,
	RELIGION: 1,
	CASTE: 1,
	PLACE_OF_ARRIVAL:1,
	TRAVEL_MODE: 1,
	NUMBER_OF_SIBLINGS:1,
	FATHER_NAME: 1,
	MOTHER_NAME: 1,
	FATHER_OCCUPATION:1,
	MOTHER_OCCUPATION:1,
	ANNUAL_INCOME: 1,
	PARENT_EMAIL_ID:1,
	ADDRESS: 1,
	PARENT_CONTACT_NUMBER: 1,
	SCHOOL_NAME: 1,
	TENTH_MARK: 1,
	TENTH_PERCENTAGE:1,
	TENTH_BOARD: 1,
	TWELTH_MARK: 1,
	TWELTH_PERCENTAGE:1,
	TWELTH_BOARD: 1,
	CUT_OF_MARK: 1,
	DATE_OF_ADMISSION:1,
	FIRSTGRADUATE: 1,
	QUOTA: 1,
	SCHOLARSHIP: 1,
	LAST_SEMESTER_CGPA:1


	}, function(err, docs) {
		if(err) 
			res.status(500).json(err);
		else if(docs)
		{
			console.log(docs);
			res.status(200).json(docs);
			/*console.log("before docs");
			console.log(docs);
			console.log("else if part");*/
		}
		else
			res.status(401).json({msg:"invalid"});
			//console.log("else part");
	})
})



/*const markInsert = mongoose.model ('marks', {
	REGISTER_NUMBER: String,
	TYPE: String,
	SUB1: String,
	SUB2: String,
	SUB3: String,
	SUB4: String,
	SUB5: String,
	SUB6: String,
	MARK1: String,
	MARK2: String,
	MARK3: String,
	MARK4: String,
	MARK5: String,
	MARK6: String
}) ;*/

//GET MARKS

app.get('/getmarks/:REGISTER_NUMBER', function(req, res) {
	console.log("inside getdetails "+req.params.REGISTER_NUMBER);
	markInsert.find({REGISTER_NUMBER: req.params.REGISTER_NUMBER}, {

	REGISTER_NUMBER: 1,
	TYPE: 1,
	SUB1: 1,
	SUB2: 1,
	SUB3: 1,
	SUB4: 1,
	SUB5: 1,
	SUB6: 1,
	MARK1: 1,
	MARK2: 1,
	MARK3: 1,
	MARK4: 1,
	MARK5: 1,
	MARK6: 1


	}, function(err, docs) {
		if(err) 
			res.status(500).json(err);
		else if(docs)
		{
			console.log(docs);
			res.status(200).json(docs);
			/*console.log("before docs");
			console.log(docs);
			console.log("else if part");*/
		}
		else
			res.status(401).json({msg:"invalid"});
			//console.log("else part");
	})
})

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


/*PROJECT GET VALUE & CONNECTION*/

const subjects = mongoose.model ('subjects', {

	REGULATION: String ,
	DEPARTMENT: String ,
	SEMESTER: String ,
	TYPE : String,
	SUB1: String,
	SUB2: String,
	SUB3: String,
	SUB4: String,
	SUB5: String,
	SUB6: String
}) ;


app.use('/insertMarks', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
  res.header('Access-Control-Allow-Credentials', 'true');
  //console.log('Inside app.use()');
  //console.log(req.body);
  next();
});




app.post('/insertMarks/', function(req, res) {

	var dbObject3 = new subjects();


    dbObject3.REGULATION = req.body.REGULATION;
    dbObject3.DEPARTMENT = req.body.DEPARTMENT;
    dbObject3.SEMESTER = req.body.SEMESTER;

	dbObject3.TYPE = (req.body.REGULATION)+(req.body.DEPARTMENT)+(req.body.SEMESTER);
	console.log(dbObject3.TYPE);
	subjects.find({TYPE:dbObject3.TYPE}, {
	TYPE: 1,
	SUB1: 1,
	SUB2: 1,
	SUB3: 1,
	SUB4: 1,
	SUB5: 1,
	SUB6: 1
    

	}, function(err, docs) {
		if(err) 
			res.status(500).json(err);
		else if(docs)
		{
			console.log(docs);
			res.status(200).json(docs);
			
			/*console.log("before docs");
			console.log(docs);
			console.log("else if part");*/
		}
		else
			res.status(401).json({msg:"invalid"});
			//console.log("else part");
	})
})





const markInsert = mongoose.model ('marks', {
	REGISTER_NUMBER: String,
	REGULATION: String,
	DEPARTMENT:  String,
	SEMESTER:  String,
	TYPE:   String,
	SUB1:  String,
	SUB2:  String,
	SUB3:  String,
	SUB4:  String,
	SUB5:  String,
	SUB6:  String,
	MARK1:  String,
	MARK2:  String,
	MARK3:  String,
	MARK4:  String,
	MARK5:  String,
	MARK6:  String

}) ;


app.post('/insertMarks1', function(req, res) {

	console.log("inside");
	//console.log(req);
    console.log('Request type:', req.method);
    console.log(req.body);

    var mark = new markInsert();
	mark.REGISTER_NUMBER = req.body.REGISTER_NUMBER;
	/*mark.REGULATION = req.body.REGULATION;
	mark.DEPARTMENT = req.body.DEPARTMENT;
	mark.SEMESTER = req.body.SEMESTER;*/
	
	mark.TYPE=(req.body.REGULATION)+(req.body.DEPARTMENT)+(req.body.SEMESTER);
	mark.SUB1 = req.body.SUB1;
	mark.SUB2 = req.body.SUB2;
	mark.SUB3 = req.body.SUB3;
	mark.SUB4 = req.body.SUB4;
	mark.SUB5 = req.body.SUB5;
	mark.SUB6 = req.body.SUB6;
	mark.MARK1 = req.body.MARK1;
	mark.MARK2 = req.body.MARK2;
	mark.MARK3 = req.body.MARK3;
	mark.MARK4 = req.body.MARK4;
	mark.MARK5 = req.body.MARK5;
	mark.MARK6 = req.body.MARK6;
	
	mark.save((err)=>
	{
		res.send(mark);
		console.log("---Marks Added to DB---")
	});
});







//GET DETAILS

app.get('/sortdetails', function(req, res) {
	console.log("inside sortdetails ");
	demoCollection.find({}, {

	NAME : 1,
	REGISTER_NUMBER: 1,
	TENTH_MARK: 1,
	TENTH_PERCENTAGE:1,
	TWELTH_MARK: 1,
	TWELTH_PERCENTAGE:1,
	LAST_SEMESTER_CGPA:1


	}, function(err, docs) {
		if(err) 
			res.status(500).json(err);
		else if(docs)
		{
			console.log(docs);
			res.status(200).json(docs);
			/*console.log("before docs");
			console.log(docs);
			console.log("else if part");*/
		}
		else
			res.status(401).json({msg:"invalid"});
			//console.log("else part");
	})
})




//UPDATE DETAILS

app.post('/updatedetails', function(req, res) {
	console.log("inside getdetails "+req.body.NAME);
	
	//console.log(req.params.DOB);
	demoCollection.updateMany({REGISTER_NUMBER:req.body.REGISTER_NUMBER} , 
		{$set:
			{
				NAME: req.body.NAME , 
				DOB: req.body.DOB ,
				GENDER:req.body.GENDER,
				BLOOD_GROUP:req.body.BLOOD_GROUP,
				BANK_ACCOUNT_NUMBER: req.body.BANK_ACCOUNT_NUMBER , 
				AADHAR_CARD_NUMBER: req.body.AADHAR_CARD_NUMBER ,
				STUDENT_CONTACT_NUMBER:req.body.STUDENT_CONTACT_NUMBER,
				POSTAL_ACCOUNT_NUMBER:req.body.POSTAL_ACCOUNT_NUMBER,
				RELIGION: req.body.RELIGION , 
				CASTE: req.body.CASTE ,
				PLACE_OF_ARRIVAL:req.body.PLACE_OF_ARRIVAL,
				TRAVEL_MODE:req.body.TRAVEL_MODE,
				NUMBER_OF_SIBLINGS: req.body.NUMBER_OF_SIBLINGS , 
				FATHER_NAME: req.body.FATHER_NAME ,
				MOTHER_NAME:req.body.MOTHER_NAME,
				FATHER_OCCUPATION:req.body.FATHER_OCCUPATION,
				MOTHER_OCCUPATION: req.body.MOTHER_OCCUPATION , 
				ANNUAL_INCOME: req.body.ANNUAL_INCOME ,
				PARENT_EMAIL_ID:req.body.PARENT_EMAIL_ID,
				ADDRESS:req.body.ADDRESS,
				PARENT_CONTACT_NUMBER: req.body.PARENT_CONTACT_NUMBER , 
				SCHOOL_NAME: req.body.SCHOOL_NAME ,
				TENTH_MARK:req.body.TENTH_MARK,
				TENTH_PERCENTAGE:req.body.TENTH_PERCENTAGE,
				TENTH_BOARD: req.body.TENTH_BOARD , 
				TWELTH_MARK: req.body.TWELTH_MARK ,
				TWELTH_PERCENTAGE:req.body.TWELTH_PERCENTAGE,
				TWELTH_BOARD:req.body.TWELTH_BOARD,
				CUT_OF_MARK: req.body.CUT_OF_MARK , 
				DATE_OF_ADMISSION: req.body.DATE_OF_ADMISSION ,
				QUOTA:req.body.QUOTA,
				SCHOLARSHIP:req.body.SCHOLARSHIP,
				LAST_SEMESTER_CGPA:req.body.LAST_SEMESTER_CGPA
		},
	 function(err, docs) {
		if(err) {
 			console.log("inside error");
			res.status(500).json(err);


		}
			
		else if(docs)
		{
			console.log(docs);
			res.status(200).json(docs);
			console.log("outside error");
			/*console.log("before docs");
			console.log(docs);
			console.log("else if part");*/
		}
		else
			res.status(401).json({msg:"invalid"});
			//console.log("else part");
	});
});


















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







//to create user
app.post('/api/post_new_chat', (req, res)=>{
	
	console.log("inside post_new_chat!!!!!!!!!!!!!!!!!1");
	console.log(req.body);

	const newChat = new mChat();
	newChat.userName = req.body.userName;
	newChat.userID = req.body.userID;
	newChat.msg = req.body.msg;

	newChat.save((err)=>{
		if(err)
			res.status(500).json(err);
		else
			res.status(200).json(newChat);
	})
});

//to do login user
app.get("/api/get_chats", (req, res)=>{
	mChat.find({},
		{userName:1,msg:1,crAt:1},
		{sort:{crAt: -1}},
		(err, docs)=>{
		if(err)
			res.status(500).json(err);
		else if(docs)
			res.status(200).json(docs);

	});
});
