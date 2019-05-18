import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutesModule } from './auth-routes.module';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutesModule
  ],
})
export class AuthModule { }
