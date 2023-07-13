import { Routes } from '@angular/router';
import { AppModules } from 'src/enum/app-modules.enum';
import { LoginComponent } from '../views/login/login.component';
import { RegisterComponent } from '../views/register/register.component';
import { AuthRoutes } from 'src/enum/auth-routes.enum';

export const authRoutes: Routes = [
  {
    path: AppModules.AUTH,
    children: [
      { path: AuthRoutes.LOGIN, component: LoginComponent },
      { path: AuthRoutes.REGISTER, component: RegisterComponent },
    ],
  },
];
