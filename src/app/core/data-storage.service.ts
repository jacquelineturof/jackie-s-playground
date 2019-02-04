import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as firebase from 'firebase';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient) {}

  addKey(key: string, secret: string, name: string) {
    const apiKey = { key, secret, name };
    return this.http.post('https://jackies-playground.firebaseio.com/data.json', apiKey);
  }
}
