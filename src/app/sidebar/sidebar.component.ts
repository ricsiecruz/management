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
  role: string | null = null; 
  menu: any[] = [];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mainService.role$.subscribe((role) => {
      this.role = role;
    });

    this.mainService.getMenu().subscribe((data: any[]) => {
      this.menu = data;
      if(this.role != 'super_admin') {
        this.menu = this.menu.filter(item => {
          return item.label !== 'Users';
        });
      }
    });
  }

  onLogout(): void {
    this.mainService.logout();
    this.router.navigate(['/login']);
  }
}
