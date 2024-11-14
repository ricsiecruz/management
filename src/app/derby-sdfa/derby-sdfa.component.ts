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
  weekOne: number[] = [];
  weekTwo: number[] = [];
  weekThree: number[] = [];
  weekFour: number[] = [];
  weekFive: number[] = [];
  upr: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.mainService.getData().subscribe((response: any) => {
      if (response.derbySdfa) {
        this.headers = response.derbySdfa[0].headers;
        this.data = response.derbySdfa[1].data;

        console.log('data', this.data);

        // Populate weekOne to weekFive arrays with numbers
        this.data.forEach(item => {
          if (item.week1) {
            item.week1.forEach((week: any) => {
              const weekOneValue = week.totalBirds
                ? parseFloat((week.rank / week.totalBirds).toFixed(2))
                : 0.0;
              this.weekOne.push(weekOneValue);
            });
          }
        });

        this.data.forEach(item => {
          if (item.week2) {
            item.week2.forEach((week: any) => {
              const weekTwoValue = week.totalBirds
                ? parseFloat((week.rank / week.totalBirds).toFixed(2))
                : 0.0;
              this.weekTwo.push(weekTwoValue);
            });
          }
        });

        this.data.forEach(item => {
          if (item.week3) {
            item.week3.forEach((week: any) => {
              const weekThreeValue = week.totalBirds
                ? parseFloat((week.rank / week.totalBirds).toFixed(2))
                : 0.0;
              this.weekThree.push(weekThreeValue);
            });
          }
        });

        this.data.forEach(item => {
          if (item.week4) {
            item.week4.forEach((week: any) => {
              const weekFourValue = week.totalBirds
                ? parseFloat((week.rank / week.totalBirds).toFixed(2))
                : 0.0;
              this.weekFour.push(weekFourValue);
            });
          }
        });

        this.data.forEach(item => {
          if (item.week5) {
            item.week5.forEach((week: any) => {
              const weekFiveValue = week.totalBirds
                ? parseFloat((week.rank / week.totalBirds).toFixed(2))
                : 0.0;
              this.weekFive.push(weekFiveValue);
            });
          }
        });

        // Calculate average UPR for each entry and assign to upr
        const numberOfEntries = this.weekOne.length;
        for (let i = 0; i < numberOfEntries; i++) {
          const total = (this.weekOne[i] || 0) +
                        (this.weekTwo[i] || 0) +
                        (this.weekThree[i] || 0) +
                        (this.weekFour[i] || 0) +
                        (this.weekFive[i] || 0);
          const average = parseFloat((total / 5).toFixed(2));
          this.upr.push(average);
        }

        console.log('upr', this.upr); // Verify UPR values in console
      }
    });
  }
}
