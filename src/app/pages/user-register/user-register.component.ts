import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword = "";

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
  }

  save() {
    console.log("Saving user", this.model);

    // save the user (this.model) into a service
    this.dataSrv.saveUser(this.model);

    // clear the form
    this.model = new User();
    this.retypePassword = null;
    this.savedAlertVisible = true;

    isDataCorrect() {

      // validate for password strongness
      var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      if (strongRegex.test(this.model.password)) {
        return true; // <- button will be disabled
      }
      return !this.model.email
        || !this.model.userName
        || !this.model.password
        || this.model.password.length < 6
        || this.model.password != this.retypePassword;
    }


  }
}
}
