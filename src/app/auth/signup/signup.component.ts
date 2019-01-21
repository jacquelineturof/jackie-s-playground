import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
      'confirmPassword': new FormControl(null),
      'accessCode': new FormControl(null)
    });
  }

  onSubmit() {
    const signUp = this.signupForm.value;
    // Do something with form data
    // Check to make sure passwords are the same
    if (signUp.password === signUp.confirmPassword) {
      this.authService.signupUser(signUp.email, signUp.password);
    } else {
      console.log('Error: Passwords do not match!');
    }
    // Navigate to Main Account Page
    this.router.navigate(['signupConfirm']);
  }
}
