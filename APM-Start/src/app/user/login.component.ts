import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';

<<<<<<< HEAD
    constructor(private authService: AuthService,
                private router: Router) { }
=======
  constructor(private authService: AuthService) { }
>>>>>>> 7df32edb50efc7045f13b9455a0099de0ade67c1

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

<<<<<<< HEAD
            // Navigate to the Product List page after log in.
            this.router.navigate(['/products']);
        } else {
            this.errorMessage = 'Please enter a user name and password.';
        };
=======
      // Navigate to the Product List page after log in.
    } else {
      this.errorMessage = 'Please enter a user name and password.';
>>>>>>> 7df32edb50efc7045f13b9455a0099de0ade67c1
    }
  }
}
