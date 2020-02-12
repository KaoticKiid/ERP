import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  name = 'Kullen Carter';



userName = "";
calculate(){
  console.log('Input User Name: ',this.userName);
}

clearForm(){
  this.userName="";
}


test(){
  console.log("User clicked the button");

  this.name = 'Kullen Carter is really cool';
}





}
