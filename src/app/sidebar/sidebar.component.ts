import { Component, inject, Input } from '@angular/core';
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
  role: string | null = null; 
  menu: any;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mainService.role$.subscribe((role) => {
      this.role = role; // Subscribe to role changes
    });
    this.mainService.getData().subscribe((data: any) => {
      this.menu = data.menu;
    });
  }

  onLogout(): void {
    // this.mainService.setRole(null);
    this.mainService.logout();
    this.router.navigate(['/login']); // Redirect to login
  }
}
