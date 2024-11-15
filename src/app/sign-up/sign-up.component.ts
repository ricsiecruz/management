import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class AppSignUpComponent {

  mainService = inject(MainService);

  ngOnInit() {
    this.mainService.getUsers().subscribe((res: any) => {
      console.log('users', res)
    })
  }

}
