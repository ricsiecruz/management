import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient with features
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router'; // Import Router for routing
import { Routes } from '@angular/router'; // Import Routes for defining routes
import { MainService } from './services/main.service';  // Ensure the service is imported
import { AppSidebarComponent } from './sidebar/sidebar.component';

// Define routes (if any)
const routes: Routes = [
  // Your app routes go here
];

@Component({
  selector: 'app-root',
  standalone: true,  // Mark component as standalone
  imports: [AppSidebarComponent, RouterOutlet],
  providers: [MainService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  data: any;

  mainService = inject(MainService)

  menu: any;

  constructor() {}

  ngOnInit(): void {
    this.mainService.getData().subscribe((data: any) => {
      this.menu = data.link;
    });
  }
}

// // Bootstrap the application with HttpClient and Router configuration
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(withFetch()),  // Enable HttpClient with optional features like fetch
//     provideRouter(routes)  // Provide the Router with the app routes
//   ]
// });
