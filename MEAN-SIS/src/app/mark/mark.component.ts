import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Mark } from '../mark';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  


allChats:User[]=[];
venkat:User[]=[];
  constructor( private http: HttpClient ,private route:Router) { }

  ngOnInit() { }
  mark:Mark={
  REGISTER_NUMBER: "",
  REGULATION: "",
  DEPARTMENT: "",
  SEMESTER: "",
  SUB1: "",
  SUB2: "",
  SUB3: "",
  SUB4: "",
  SUB5: "",
  SUB6: "",
  MARK1: "",
  MARK2: "",
  MARK3: "",
  MARK4: "",
  MARK5: "",
  MARK6: ""
  
  
  }
  user: User = {

  userName: "",
    email:"",
    password: "",
    //TYPE:"",
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

//GET DETAILS

  insertMarks(): void{

    this.http.
    post("http://localhost:3000/insertMarks/",this.mark).subscribe(
        data=> {
          console.log("post req is successfull",data);

          
         //this.allChats=[];
          for (var key in data) {
                  this.allChats.push(data[key]);
                  this.venkat.push(data[key]);
                  console.log("NAME");
              //    console.log(this.allChats);

          }
          console.log(this.allChats[0].SUB1);
          this.venkat[0]=this.allChats[0];
          console.log("suma"+this.venkat[0].SUB1);
          alert(this.allChats[0]);

        }, 
        error=> {
          console.log("Error", error);
        });
    
      }



      doUpdate():void{
      //  alert(this.var);
        //alert(this.mark.SUB6);
        alert(this.allChats);
        console.log(this.allChats);
        alert("inside doUpdate");
//console.log("venkat la than da varuthu sunniSSSS"+ this.venkat[0].SUB1);
  this.mark.SUB1=this.venkat[0].SUB1;
  this.mark.SUB2=this.venkat[0].SUB2;
  this.mark.SUB3=this.venkat[0].SUB3;
  this.mark.SUB4=this.venkat[0].SUB4;
  this.mark.SUB5=this.venkat[0].SUB5;
  this.mark.SUB6=this.venkat[0].SUB6;
  //console.log("sub1"+this.mark.SUB1);
    this.http.
    post("http://localhost:3000/insertMarks1",this.mark).subscribe(
        data=> {
          alert("post req is successfull"+data);
      }, 
        error=> {
          console.log("Error", error);
        });
      }
  }