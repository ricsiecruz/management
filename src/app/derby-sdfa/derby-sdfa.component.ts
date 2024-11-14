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
  data: any[] = [];
  weekOne: string[] = [];
  weekTwo: string[] = [];
  weekThree: string[] = [];
  weekFour: string[] = [];
  weekFive: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.mainService.getData().subscribe((response: any) => {
      if (response.derbySdfa) {
        this.headers = response.derbySdfa[0].headers;
        this.data = response.derbySdfa[1].data;

        console.log('data', this.data)

        this.data.forEach(item => {
          if (item.week1) {
            item.week1.forEach((week: any) => {
              const weekOneValue = week.totalBirds
                ? (week.rank / week.totalBirds).toFixed(2)
                : "0.00";
              this.weekOne.push(weekOneValue);
            });
          }
        });

        this.data.forEach(item => {
          if (item.week2) {
            item.week2.forEach((week: any) => {
              const weekOneValue = week.totalBirds
                ? (week.rank / week.totalBirds).toFixed(2)
                : "0.00";
              this.weekTwo.push(weekOneValue);
            });
          }
        });

        this.data.forEach(item => {
          if (item.week3) {
            item.week3.forEach((week: any) => {
              const weekOneValue = week.totalBirds
                ? (week.rank / week.totalBirds).toFixed(2)
                : "0.00";
              this.weekThree.push(weekOneValue);
            });
          }
        });

        this.data.forEach(item => {
          if (item.week4) {
            item.week4.forEach((week: any) => {
              const weekOneValue = week.totalBirds
                ? (week.rank / week.totalBirds).toFixed(2)
                : "0.00";
              this.weekFour.push(weekOneValue);
            });
          }
        });

        this.data.forEach(item => {
          if (item.week4) {
            item.week4.forEach((week: any) => {
              const weekOneValue = week.totalBirds
                ? (week.rank / week.totalBirds).toFixed(2)
                : "0.00";
              this.weekFive.push(weekOneValue);
            });
          }
        });

        console.log('weekOne', this.weekOne); // Check values in console
      }
    });
  }
}
