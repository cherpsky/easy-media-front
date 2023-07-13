import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthRoutingModule } from './routing/auth-routing.module';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [AuthLayoutComponent, LoginComponent, RegisterComponent],
})
export class AuthModule {}
