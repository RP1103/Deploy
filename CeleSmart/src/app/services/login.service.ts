import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:4000/api/login'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  loginUser(userData: { name: string, phoneNumber: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
