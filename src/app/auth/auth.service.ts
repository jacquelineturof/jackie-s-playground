import { Router } from '@angular/router';
import { Subject} from 'rxjs';

import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private authorizedSubject = new Subject<boolean>();
  token: string;

  constructor(private router: Router) {}

  async signupUser(email: string, password: string) {
    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.router.navigate(['signin']);
      return 'User registered with email: ' + email;
    } catch (e) {
      this.router.navigate(['signup']);
      return e.message;
    }
  }

  async signinUser(email: string, password: string) {
    try {
      const dbResponse = await firebase.auth().signInWithEmailAndPassword(email, password);
      this.token = await firebase.auth().currentUser.getIdToken();
      this.authorizedSubject.next(true);
      return 'Welcome ' + email + '!' ;
    } catch (e) {
      return e.message;
    }
  }

  isAuthenticated() {
    return this.authorizedSubject.asObservable();
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.authorizedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    console.log('in auth service: ', this.token);
    return typeof this.token === 'string';
  }

  sendVerificationEmail(): string {
    let message = '';
    firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        message = 'Email Sent';
        console.log('sendveritificationemail', message);
      })
      .catch((error) => {
        message = error.message;
        console.log('sendveritificationemail', message);
      });
    return message;
  }

  async sendForgotPasswordEmail(email: string) {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      return 'Email sent to: ' + email;
    } catch (e) {
      return e.message;
    }
  }
}
