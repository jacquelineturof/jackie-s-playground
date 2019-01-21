import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bitmex-v3000';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCELgcJ_ur4ot4ECytL1-5cCOUskYi-ThE',
      authDomain: 'jackies-playground.firebaseapp.com'
    });
  }
}
