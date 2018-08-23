import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = '';
  btnDisable = true;
  constructor() {
   }

  ngOnInit() {
 
    
  }

enableButton(event:Event){
  if(this.username !== ''){
     console.log("Not Empty"); 
    this.btnDisable = false;
    }
    else{
    console.log("Empty");  
      this.btnDisable = true;
    }
  }
  clearField(){
    this.username = '';
    this.btnDisable = true;
  }
  
  

}
