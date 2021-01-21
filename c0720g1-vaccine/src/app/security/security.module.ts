import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [LoginComponent, SignupComponent, ResetPasswordComponent],
  imports: [
    CommonModule
  ]
})
export class SecurityModule { }
