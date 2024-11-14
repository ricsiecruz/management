import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Make sure this is imported
import { AppComponent } from './app.component';  // Standalone component
import { DatabaseComponent } from './database/database.component';
import { DerbySdfaComponent } from './derby-sdfa/derby-sdfa.component';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { MainService } from './services/main.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppSidebarComponent,
    DatabaseComponent,
    DerbySdfaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
    // HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]  // Standalone component bootstrap
})
export class AppModule {}
