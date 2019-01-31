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
import { AuthModule } from './auth/auth.module';

import { CoreModule } from './core/core.module';
import { NgMaterialsModule } from './core/ngMaterials/ng-materials.module';
import { ApiKeysModule } from './account/apiKeys/apiKeys.module';
import { ChartsModule } from './account/charts/charts.module';
import { OrdersModule } from './account/orders/orders.module';

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
    AuthModule,
    CoreModule,
    NgMaterialsModule,
    ApiKeysModule,
    ChartsModule,
    OrdersModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
