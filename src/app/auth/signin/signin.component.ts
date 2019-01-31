import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService,
              private snackbar: MatSnackBar ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required,
          Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  async onSubmit() {
    const responseMessage = await this.authService.signinUser(this.loginForm.value.email, this.loginForm.value.password);
    this.snackbar.open(responseMessage, 'Undo', {
      duration: 8000
    });
    // if login in successful navigate to account page
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/account']);
    }
  }

  async forgotPassword() {
    const email = this.loginForm.value.email;
    let responseMessage = '';
    if (email === null) {
      responseMessage = 'Please enter an email to retrieve password!';
    } else {
      responseMessage = await this.authService.sendForgotPasswordEmail(email);
    }
    this.snackbar.open(responseMessage, 'Undo', {
      duration: 8000
    });
  }

  goTo(pageName: string) {
    const navUrl = '/' + pageName;
    this.router.navigate([navUrl]);
  }
}
