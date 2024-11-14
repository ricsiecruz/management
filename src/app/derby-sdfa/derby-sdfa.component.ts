import { Component, inject } from '@angular/core';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-derby-sdfa',
  templateUrl: './derby-sdfa.component.html',
  styleUrl: './derby-sdfa.component.scss'
})
export class DerbySdfaComponent {
  mainService = inject(MainService);
  data: any;

  constructor() {}

  ngOnInit(): void {
    this.mainService.getData().subscribe((data: any) => {
      console.log('data', data.derbySdfa)
      this.data = data.derbySdfa;
    });
  }
}
