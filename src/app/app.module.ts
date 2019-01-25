import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './auth/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './auth/signup/signup.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth/auth.service';
import { NavComponent } from './nav/nav.component';
import { AccountComponent } from './account/account.component';
import { ApiKeysComponent } from './account/apiKeys/apiKeys.component';
import { OrdersComponent } from './account/orders/orders.component';
import { ChartsComponent } from './account/charts/charts.component';
import { AccoutHomeComponent } from './account/accountHome/accountHome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    NavComponent,
    AccountComponent,
    AccoutHomeComponent,
    ApiKeysComponent,
    OrdersComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
