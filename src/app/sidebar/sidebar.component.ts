import { Component, inject } from '@angular/core';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class AppSidebarComponent {

  mainService = inject(MainService);

  menu: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainService.getData().subscribe((data: any) => {
      this.menu = data.menu;
    });
  }

  onLogout(): void {
    this.mainService.logout();
    this.router.navigate(['/login']); // Redirect to login
  }
}
