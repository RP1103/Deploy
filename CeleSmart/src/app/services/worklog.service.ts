import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {
  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getWorklogEntries() {
    return this.http.get<any[]>(`${this.baseUrl}/worklogEntries`);
  }

  addWorklogEntry(entry: any) {
    return this.http.post(`${this.baseUrl}/api/worklogs`, [entry]);
  }

  getWorklogEntriesByName(name: string) {
    return this.http.get<any[]>(`${this.baseUrl}/worklogEntries/${name}`);
  }
}
