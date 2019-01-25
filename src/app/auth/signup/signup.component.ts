import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private router: Router, private authService: AuthService,
              private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
      'confirmPassword': new FormControl(null),
      'accessCode': new FormControl(null)
    });
  }

  async onSubmit() {
    const signUp = this.signupForm.value;
    let responseMessage = '';
    // Do something with form data
    // Check to make sure passwords are the same
    if (signUp.password === signUp.confirmPassword) {
      responseMessage = await this.authService.signupUser(signUp.email, signUp.password);
    } else {
      responseMessage = 'Passwords do not match';
    }

    this.snackbar.open(responseMessage, 'Undo', {
      duration: 8000
    });
  }
}
