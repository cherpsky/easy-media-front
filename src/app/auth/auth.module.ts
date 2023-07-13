import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthRoutingModule } from './routing/auth-routing.module';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [AuthLayoutComponent, LoginComponent, RegisterComponent],
})
export class AuthModule {}
