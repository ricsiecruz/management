import { Component } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mainService: MainService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
    this.loginForm = this.fb.group({
      email: ['johndoe@example.com', [Validators.required, Validators.email]],
      password: ['securepassword', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
  
      this.mainService.login(payload).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/derby-sdfa']);
        },
        (error) => {
          console.error('Login failed', error);
          alert('Login failed. Please check your credentials.');
        }
      );
    }
  }

  redirectToSignup(): void {
    this.router.navigate(['/signup']);
  }
  
}
