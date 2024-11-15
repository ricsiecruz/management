import { Component } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  role: string | null = null;

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
    // this.loginForm = this.fb.group({
    //   email: ['super_admin@mail.com', [Validators.required, Validators.email]],
    //   password: ['123qwe', [Validators.required, Validators.minLength(6)]]
    // });
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
          this.mainService.setRole(response.role); // Set the role in the service
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
