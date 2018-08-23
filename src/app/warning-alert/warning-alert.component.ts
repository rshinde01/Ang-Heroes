import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
warningStatus = false;
warningMessage:string = "Resolve the Error!!";
warningStyle : string;
  

// getStatus(){
//    return this.warningStatus;   //Property Binding
//  }
  constructor() {
    this.warningStyle ='warning-default';
    setTimeout(() => {
        this.warningStatus = true;
    }, 5000);
   
  }

  ngOnInit() {
  }
  onResolveWarning(){
   this.warningMessage = "Resolved  Successfully" ;
   this.warningStyle ='warning-change'; 
   
    
    
  }

}
