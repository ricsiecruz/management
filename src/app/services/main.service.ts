import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  API = 'assets/data.json';
  API_URL = environment.apiUrl;
  private roleSubject = new BehaviorSubject<string | null>(null);
  role$ = this.roleSubject.asObservable();

  setRole(role: string): void {
    this.roleSubject.next(role);
  }

  getRole(): string | null {
    return this.roleSubject.value;
  }

  constructor(private http: HttpClient) {}

  // Fetch static data
  getData(): Observable<any> {
    return this.http.get<any>(this.API);
  }

  login(payload: { email: string; password: string }): Observable<any> {
    console.log('super admin')
    return new Observable((observer) => {
      this.http.post<any>(this.API_URL + 'login', payload).subscribe(
        (response) => {
          if (response?.token) {
            // Save token to localStorage for persistence
            localStorage.setItem('authToken', response.token);
          }
          observer.next(response);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('authToken'); // Clear token
  }

  // Check login status
  getLoginStatus(): boolean {
    // Check if token exists in localStorage
    return !!localStorage.getItem('authToken');
  }

  // Fetch users
  getUsers(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'users');
  }
}
