 
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  userData = {
    name: '',
    phoneNumber: ''
  };

  constructor(private loginService: LoginService, private router: Router) { }

  onLogin() {
    if (!this.userData.name || !this.userData.phoneNumber) {
      console.error('Name and phone number are required.');
      // You can also display an error message to the user
      return;
    }

    // Perform your login logic here
    this.loginService.loginUser(this.userData)
      .subscribe(
        response => {
          console.log(response); // Handle success response
          // Navigate to the main part of the application
          this.router.navigate(['/tabs']); // Change 'tabs' to the appropriate route
        },
        error => { 
          console.error(error); // Handle error
        }
      );
  }
}
