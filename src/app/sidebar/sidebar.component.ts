import { Component, inject } from '@angular/core';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

  constructor() {}

  ngOnInit(): void {
    this.mainService.getData().subscribe((data: any) => {
      this.menu = data.menu;
    });
  }
}
