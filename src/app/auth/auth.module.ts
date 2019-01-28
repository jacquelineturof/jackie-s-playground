import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

import { AuthRoutingModule } from './auth-routing.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    CoreModule
  ]
})
export class AuthModule {}
