import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainService } from './services/main.service';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { AppSignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, AppSignUpComponent, AppSidebarComponent, RouterOutlet, CommonModule],
  providers: [MainService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  mainService = inject(MainService)

  isSignupRoute = false;
  isLoginRoute = false;
  menu: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isSignupRoute = this.router.url.includes('signup');
    });
    this.router.events.subscribe(() => {
      this.isLoginRoute = this.router.url.includes('login');
    });
    this.mainService.getData().subscribe((data: any) => {
      this.menu = data.link;
    });
  }
}