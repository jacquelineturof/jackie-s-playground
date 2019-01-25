import { Router } from '@angular/router';
import { Subject} from 'rxjs';

import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private authorizedSubject = new Subject<boolean>();
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['signupConfirm']);
      })
      .catch(error => console.log(error));
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
}
