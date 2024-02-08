import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class L1 {
  _id: number;
  name: string;
  imagurl: string;
  qty: number;
  price: number;

}

@Injectable({
  providedIn: 'root'
})
export class L1Service {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatL1(l1: L1): Observable<any> {
    return this.httpClient.post<L1>('http://localhost:5000/api/create-l1', l1, this.httpOptions)
      .pipe(
        catchError(this.handleError<L1>('Error occured'))
      );
  }

  getL1(id): Observable<L1[]> {
    return this.httpClient.get<L1[]>('http://localhost:5000/api/fetch-L1/' + id)
      .pipe(
        tap(_ => console.log(`L1 fetched: ${id}`)),
        catchError(this.handleError<L1[]>(`Get L1 id=${id}`))
      );
  }

  getLs1(): Observable<L1[]> {
    return this.httpClient.get<L1[]>('http://localhost:5000/api')
      .pipe(
        tap(ls1 => console.log('ls1 retrieved!')),
        catchError(this.handleError<L1[]>('Get other', []))
      );
  }

  updateL1(id, l1: L1): Observable<any> {
    return this.httpClient.put('http://localhost:5000/api/update-l1/' + id, l1, this.httpOptions)
      .pipe(
        tap(_ => console.log(`L1 updated: ${id}`)),
        catchError(this.handleError<L1[]>('Update L1'))
      );
  }

  deleteL1(id): Observable<L1[]> {
    return this.httpClient.delete<L1[]>('http://localhost:5000/api/delete-l1/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`L1 deleted: ${id}`)),
        catchError(this.handleError<L1[]>('Delete L1'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } ;

}

