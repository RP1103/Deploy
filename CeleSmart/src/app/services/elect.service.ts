import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Elect {
  _id: number;
  name: string;
  imagurl: string;
  workers: number;
  salary: number;

}

@Injectable({
  providedIn: 'root'
})
export class ElectService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatElect(elect: Elect): Observable<any> {
    return this.httpClient.post<Elect>('http://localhost:3009/api/create-elect', elect, this.httpOptions)
      .pipe(
        catchError(this.handleError<Elect>('Error occured'))
      );
  }

  getElect(id): Observable<Elect[]> {
    return this.httpClient.get<Elect[]>('http://localhost:3009/api/fetch-elect/' + id)
      .pipe(
        tap(_ => console.log(`elect fetched: ${id}`)),
        catchError(this.handleError<Elect[]>(`Get elect id=${id}`))
      );
  }

  getElects(): Observable<Elect[]> {
    return this.httpClient.get<Elect[]>('http://localhost:3009/api')
      .pipe(
        tap(elects => console.log('elects retrieved!')),
        catchError(this.handleError<Elect[]>('Get other', []))
      );
  }

  updateElect(id, elect: Elect): Observable<any> {
    return this.httpClient.put('http://localhost:3009/api/update-elect/' + id, elect, this.httpOptions)
      .pipe(
        tap(_ => console.log(`elect updated: ${id}`)),
        catchError(this.handleError<Elect[]>('Update carv'))
      );
  }

  deleteElect(id): Observable<Elect[]> {
    return this.httpClient.delete<Elect[]>('http://localhost:3009/api/delete-elect/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`elect deleted: ${id}`)),
        catchError(this.handleError<Elect[]>('Delete elect'))
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

