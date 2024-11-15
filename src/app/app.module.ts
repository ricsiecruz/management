import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatabaseComponent } from './database/database.component';
import { DerbySdfaComponent } from './derby-sdfa/derby-sdfa.component';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { MainService } from './services/main.service';
import { CommonModule } from '@angular/common';
import { AppSignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppSignUpComponent,
    AppSidebarComponent,
    DatabaseComponent,
    DerbySdfaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})

export class AppModule {}
