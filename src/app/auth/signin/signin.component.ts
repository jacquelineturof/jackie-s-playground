import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
      'email': new FormControl(null),
      'password': new FormControl(null)
    });
  }

  onSubmit() {
    this.authService.signinUser(this.loginForm.value.email, this.loginForm.value.password);
    this.snackbar.open('Hello, World!', 'Undo', {
      duration: 2000
    });
  }

  goTo(pageName: string) {
    const navUrl = '/' + pageName;
    this.router.navigate([navUrl]);
  }
}
