import { RouterModule, Routes } from '@angular/router';
import { DerbySdfaComponent } from './derby-sdfa/derby-sdfa.component';
import { DatabaseComponent } from './database/database.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: DerbySdfaComponent },
    { path: 'derby-sdfa', component: DerbySdfaComponent },
    { path: 'database', component: DatabaseComponent }
];
  

