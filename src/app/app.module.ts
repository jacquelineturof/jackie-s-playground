import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { AuthService } from './auth/auth.service';

import { AccountComponent } from './account/account.component';
import { ApiKeysComponent } from './account/apiKeys/apiKeys.component';
import { OrdersComponent } from './account/orders/orders.component';
import { ChartsComponent } from './account/charts/charts.component';
import { AuthModule } from './auth/auth.module';
import { AccoutHomeComponent } from './account/accountHome/accountHome.component';

import { CoreModule } from './core/core.module';
import { NgMaterialsModule } from './core/ngMaterials/ng-materials.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AccountComponent,
    ApiKeysComponent,
    OrdersComponent,
    ChartsComponent,
    AccoutHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    NgMaterialsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
