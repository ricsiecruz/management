import { Routes } from '@angular/router';
import { DerbySdfaComponent } from './derby-sdfa/derby-sdfa.component';
import { DatabaseComponent } from './database/database.component';
import { AppSignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', component: DerbySdfaComponent },
    { path: 'signup', component: AppSignUpComponent },
    { path: 'derby-sdfa', component: DerbySdfaComponent },
    { path: 'database', component: DatabaseComponent }
];
  

