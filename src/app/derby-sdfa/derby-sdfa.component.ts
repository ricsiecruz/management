import { Component, inject, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-derby-sdfa',
  templateUrl: './derby-sdfa.component.html',
  styleUrls: ['./derby-sdfa.component.scss']
})
export class DerbySdfaComponent implements OnInit {
  mainService = inject(MainService);
  headers: string[] = [];
  data: any;
  weekOne: number[] = [];
  weekTwo: number[] = [];
  weekThree: number[] = [];
  weekFour: number[] = [];
  weekFive: number[] = [];
  upr: number[] = [];
  derbySdfa: any;

  constructor() {}

  ngOnInit(): void {
    this.mainService.getData().subscribe((response: any) => {
      if (response.derbySdfa) {
        this.headers = response.derbySdfa[0].headers;
      }
    });
    this.mainService.getDerbySdfa().subscribe((res: any) => {
      console.log('data', res);
      this.data = res;
      // this.data = res[0].data;
    });
    
  }

  getWeekKeys(dataItem: any): string[] {
    return Object.keys(dataItem).filter(key => key.startsWith('week'));
  }
  
  trackById(index: number, item: any): any {
    return item.id || index;
  }
  

}
