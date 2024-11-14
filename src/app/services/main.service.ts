// main.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Correct import
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // Service is available throughout the app
})
export class MainService {
  API_URL = 'assets/data.json';

  constructor(private http: HttpClient) {
    console.log('api', this.API_URL)
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.API_URL);  // Correct usage
  }
}
