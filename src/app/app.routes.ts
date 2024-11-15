import { Routes } from '@angular/router';
import { DerbySdfaComponent } from './derby-sdfa/derby-sdfa.component';
import { DatabaseComponent } from './database/database.component';
import { AppSignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    { path: '', component: DerbySdfaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: AppSignUpComponent },
    { path: 'derby-sdfa', component: DerbySdfaComponent, canActivate: [AuthGuard] },
    { path: 'database', component: DatabaseComponent, canActivate: [AuthGuard] }
];
  

