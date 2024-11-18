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
  private roleSubject = new BehaviorSubject<string | null>(this.getRoleFromStorage());
  role$ = this.roleSubject.asObservable();

  constructor(private http: HttpClient) {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private getRoleFromStorage(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('role');
    }
    return null;
  }

  setRole(role: string): void {
    this.roleSubject.next(role);
    if (this.isBrowser()) {
      localStorage.setItem('role', role);
    }
  }

  getRole(): string | null {
    return this.roleSubject.value;
  }

  clearRole(): void {
    this.roleSubject.next(null);
    if (this.isBrowser()) {
      localStorage.removeItem('role');
    }
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.API);
  }

  login(payload: { email: string; password: string }): Observable<any> {
    return new Observable((observer) => {
      this.http.post<any>(this.API_URL + 'login', payload).subscribe(
        (response) => {
          if (response?.token) {
            if (this.isBrowser()) {
              localStorage.setItem('authToken', response.token);
            }
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

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('authToken');
    }
    this.clearRole();
  }

  getLoginStatus(): boolean {
    if (this.isBrowser()) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }

  getMenu(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}menu`);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'users');
  }

  getDerbySdfa(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}seasons`);
  }
}
