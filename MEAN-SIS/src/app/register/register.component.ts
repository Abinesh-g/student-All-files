import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
 
export class RegisterComponent implements OnInit {

allChats:User[]=[];

  constructor( private http: HttpClient ,private route:Router) { }

  ngOnInit() { }

  user: User = {

  userName: "",
    email:"hellohello",
    password: "",

    SUB1:"",
    SUB2:"",
    SUB3:"",
    SUB4:"",
    SUB5:"",
    SUB6:"",
     MARK1: "",
  MARK2: "",
  MARK3: "",
  MARK4: "",
  MARK5: "",
  MARK6: "",
    REGULATION:"",
  DEPARTMENT:"",
  SEMESTER: "",


REGISTER_NUMBER1: "",
REGISTER_NUMBER2: "",

    NAME : "",
  REGISTER_NUMBER: "",
  DOB:  "",
  GENDER:  "",
  BLOOD_GROUP: "",
  AADHAR_CARD_NUMBER: "",
  BANK_ACCOUNT_NUMBER:  "",
  STUDENT_CONTACT_NUMBER:  "",
  POSTAL_ACCOUNT_NUMBER:  "",
  RELIGION:  "",
  CASTE:  "",
  PLACE_OF_ARRIVAL:  "",
  TRAVEL_MODE:  "",
  NUMBER_OF_SIBLINGS: "",
  FATHER_NAME:  "",
  MOTHER_NAME:  "",
  FATHER_OCCUPATION: "",
  MOTHER_OCCUPATION:  "",
  ANNUAL_INCOME:  "",
  PARENT_EMAIL_ID:  "",
  ADDRESS:  "",
  PARENT_CONTACT_NUMBER: "",
  SCHOOL_NAME:  "",
  TENTH_MARK:  "",
  TENTH_PERCENTAGE: "",
  TENTH_BOARD:  "",
  TWELTH_MARK:  "",
  TWELTH_PERCENTAGE:  "",
  TWELTH_BOARD:  "",
  CUT_OF_MARK:  "",
  DATE_OF_ADMISSION: "",
  FIRSTGRADUATE:  "",
  QUOTA:  "",
  SCHOLARSHIP: "",
  LAST_SEMESTER_CGPA: ""
  

  };

  onSubmit(): void{
    //alert( "Name: " + this.user.userName + " " + "Password: "+this.user.password );
    console.log(this.user.userName);

    this.http.
    post("http://localhost:3000/apivalue",this.user).subscribe(
        data=> {
          alert( "Name: " + this.user.userName + " " + "Password: "+this.user.password );
          console.log('in subscribe');
          console.log("post req is successfull",data);
        }, 
        error=> {
          console.log("Error", error);
        });
      }



 
  

//GET DETAILS

  getByNames(): void{
    //alert( "Name: " + this.user.userName + " " + "Password: "+this.user.password );
    console.log(this.user.userName);

    this.http.
    get("http://localhost:3000/getdetails/"+this.user.userName).subscribe(
        data=> {
          alert( "Name: " + this.user.userName );
          console.log('in subscribe');
          console.log("post req is successfull",data);

          
         //NEWLY ADDED 
         this.allChats=[];
          for (var key in data) {
                  //alert("inside for");
                 // console.log(data[key].Email_db);
                  this.allChats.push(data[key]);
                  console.log("NAME");
                  console.log(this.allChats);

          }
          console.log(this.allChats[0]);
          /*console.log(data);*/

          alert(this.allChats[0]);




        }, 
        error=> {
          console.log("Error", error);
        });
      }



        updateByNames(): void{
    //alert( "Name: " + this.user.userName + " " + "Password: "+this.user.password );
    console.log(this.user.userName);

    this.http.
    get("http://localhost:3000/updatedetails/"+this.user.userName).subscribe(
        data=> {
          alert( "Name: " + this.user.userName );
          console.log('in subscribe');
          console.log("post req is successfull",data);

          
         //NEWLY ADDED 
         


        }, 
        error=> {
          console.log("Error", error);
        });
      }




    }

    