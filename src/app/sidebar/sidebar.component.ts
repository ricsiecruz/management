import { Component, inject } from '@angular/core';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],  // Add RouterModule here
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class AppSidebarComponent {

  mainService = inject(MainService);

  menu: any;

  constructor() {}

  ngOnInit(): void {
    console.log('test');
    this.mainService.getData().subscribe((data: any) => {
      console.log('data', data);
      this.menu = data.menu;  // Correctly assign the 'menu' array
    });
  }
}
