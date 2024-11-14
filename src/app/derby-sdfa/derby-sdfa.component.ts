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
  weekOnes: string[] = []; // Array to hold all `weekOne` values

  constructor() {}

  ngOnInit(): void {
    this.mainService.getData().subscribe((response: any) => {
      if (response.derbySdfa) {
        this.headers = response.derbySdfa[0].headers;
        this.data = response.derbySdfa[1].data;

        console.log('data', this.data)

        // Calculate `weekOne` for each week entry and push to `weekOnes`
        this.data.forEach(item => {
          if (item.week1) {
            item.week1.forEach((week: any) => {
              const weekOneValue = week.totalBirds
                ? (week.rank / week.totalBirds).toFixed(2)
                : "0.00";
              this.weekOnes.push(weekOneValue);
            });
          }
        });

        console.log('weekOnes', this.weekOnes); // Check values in console
      }
    });
  }
}
