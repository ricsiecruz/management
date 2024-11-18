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
      console.log('derby sdfa', res);
      this.data = res;
      this.derbySdfa = res.data;
    
      // Process the sdfa_points data
      this.derbySdfa = this.derbySdfa.map((data: any) => {
        if (data.sdfa_points && Array.isArray(data.sdfa_points.data)) {
          // Process the sdfa_points array
          Object.keys(data.sdfa_points.data).forEach(weekKey => {
            if (Array.isArray(data.sdfa_points.data[weekKey])) {
              // Access each week data array
              data.sdfa_points.data[weekKey] = data.sdfa_points.data[weekKey].map((weekData: any) => {
                return weekData; // Process week data if necessary
              });
            }
          });
        }
        console.log('UPR:', data.sdfa_points.upr);
        return data;
      });

      console.log('aaa', this.derbySdfa)
    });
    
  }

  calculateWeekNo(rank: string, totalBirds: string): string {
    if (rank && totalBirds) {
      const rankNum = parseFloat(rank);
      const totalBirdsNum = parseFloat(totalBirds);
      if (!isNaN(rankNum) && !isNaN(totalBirdsNum) && totalBirdsNum !== 0) {
        const weekNo = rankNum / totalBirdsNum;
        return weekNo.toFixed(2);  // Format the result to two decimal places
      }
    }
    return '-';  // Return a fallback value if data is missing or invalid
  }  

  getWeekAverage(weekIndex: number, dataIndex: number): number {
    switch (weekIndex) {
      case 0:
        return this.weekOne[dataIndex] || 0;
      case 1:
        return this.weekTwo[dataIndex] || 0;
      case 2:
        return this.weekThree[dataIndex] || 0;
      case 3:
        return this.weekFour[dataIndex] || 0;
      case 4:
        return this.weekFive[dataIndex] || 0;
      default:
        return 0;
    }
  }

  // New function to calculate sdfaWeekAve
  calculateSdfaWeekAve(points: number, f: number): number {
    return points * f;
  }

  // New function to calculate sdfaUpr (average across weeks)
  calculateSdfaUpr(item: any): number {
    const weeks = ['week1', 'week2', 'week3', 'week4', 'week5'];
    let totalSdfa = 0;
    let count = 0;

    weeks.forEach(weekKey => {
      if (item.sdfaPoints[0][weekKey]) {
        const points = item.sdfaPoints[0][weekKey].points || 0;
        const f = item.sdfaPoints[0][weekKey].f || 0;
        totalSdfa += this.calculateSdfaWeekAve(points, f);
        count++;
      }
    });

    return count > 0 ? parseFloat((totalSdfa / count).toFixed(2)) : 0;
  }
}
