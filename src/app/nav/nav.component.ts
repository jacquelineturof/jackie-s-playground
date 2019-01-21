import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  isAuthorized: boolean;
  isAuthorizedSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthorized = this.authService.isLoggedIn();
    this.isAuthorizedSubscription = this.authService.isAuthenticated()
      .subscribe(res => {
        this.isAuthorized = res;
      });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.isAuthorizedSubscription.unsubscribe();
  }
}
