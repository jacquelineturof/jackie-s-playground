import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  isAuthorized: boolean;
  isAuthorizedSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isAuthorized = this.authService.isLoggedIn();
    console.log(this.isAuthorized);
    this.isAuthorizedSubscription = this.authService.isAuthenticated()
      .subscribe(res => {
        this.isAuthorized = res;
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  ngOnDestroy() {
    this.isAuthorizedSubscription.unsubscribe();
  }
}
