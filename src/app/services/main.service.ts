// main.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Correct import
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',  // Service is available throughout the app
})
export class MainService {
  API = 'assets/data.json';
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log('api', this.API)
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.API);  // Correct usage
  }
  
  getUsers(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'users')
  }
}
