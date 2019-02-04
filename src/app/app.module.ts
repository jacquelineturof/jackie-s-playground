import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';

import { AuthService } from './auth/auth.service';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { NgMaterialsModule } from './core/ngMaterials/ng-materials.module';
import { ApiKeysModule } from './account/apiKeys/apiKeys.module';
import { ChartsModule } from './account/charts/charts.module';
import { OrdersModule } from './account/orders/orders.module';
import { DataStorageService } from './core/data-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    NgMaterialsModule,
    ApiKeysModule,
    ChartsModule,
    OrdersModule
  ],
  providers: [AuthService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
