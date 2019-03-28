const mongoose=require('mongoose'),
schema=mongoose.Schema,
userSchema= new Schema({
	userName: {type: String,required: true,unique:true},
	password: {type: String,required: true}
	/*age :{type:Number ,required:true},
	createdDate: {type:Date,default:Date.now}*/
});
modules.exports={user: mongoose.model('user',userSchema)}