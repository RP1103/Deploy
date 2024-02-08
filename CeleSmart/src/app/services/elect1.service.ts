import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Time } from '@angular/common';

export class Elect1 {
  _id: number;
  name: string;
  imagurl: string;
  workers: number;
  salary: number;
  phno:number;
  time:Time;

}

@Injectable({
  providedIn: 'root'
})
export class Elect1Service {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatElect1(elect1: Elect1): Observable<any> {
    return this.httpClient.post<Elect1>('http://localhost:3010/api/create-elect1', elect1, this.httpOptions)
      .pipe(
        catchError(this.handleError<Elect1>('Error occured'))
      );
  }

  getElect1(id): Observable<Elect1[]> {
    return this.httpClient.get<Elect1[]>('http://localhost:3010/api/fetch-elect1/' + id)
      .pipe(
        tap(_ => console.log(`elect1 fetched: ${id}`)),
        catchError(this.handleError<Elect1[]>(`Get elect1 id=${id}`))
      );
  }

  getElects1(): Observable<Elect1[]> {
    return this.httpClient.get<Elect1[]>('http://localhost:3010/api')
      .pipe(
        tap(elects1 => console.log('elects1 retrieved!')),
        catchError(this.handleError<Elect1[]>('Get elect1', []))
      );
  }

  updateElect1(id, elect1: Elect1): Observable<any> {
    return this.httpClient.put('http://localhost:3010/api/update-elect1/' + id, elect1, this.httpOptions)
      .pipe(
        tap(_ => console.log(`elect1 updated: ${id}`)),
        catchError(this.handleError<Elect1[]>('Update elect1'))
      );
  }

  deleteElect1(id): Observable<Elect1[]> {
    return this.httpClient.delete<Elect1[]>('http://localhost:3010/api/delete-elect1/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`elect1 deleted: ${id}`)),
        catchError(this.handleError<Elect1[]>('Delete elect1'))
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

