import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Other {
  _id: number;
  name: string;
  kgs: number;
  qty: number;
  price: number;
  imgurl: string;
}


@Injectable({
  providedIn: 'root'
})

export class OthersService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createOther(other: Other): Observable<any> {
    return this.httpClient.post<Other>('http://localhost:3200/api/create-other', other, this.httpOptions)
      .pipe(
        catchError(this.handleError<Other>('Error occured'))
      );
  }

  getOther(id): Observable<Other[]> {
    return this.httpClient.get<Other[]>('http://localhost:3200/api/fetch-other/' + id)
      .pipe(
        tap(_ => console.log(`other fetched: ${id}`)),
        catchError(this.handleError<Other[]>(`Get other id=${id}`))
      );
  }

  getOthers(): Observable<Other[]> {
    return this.httpClient.get<Other[]>('http://localhost:3200/api')
      .pipe(
        tap(Others => console.log('others retrieved!')),
        catchError(this.handleError<Other[]>('Get other', []))
      );
  }

  updateOther(id, other: Other): Observable<any> {
    return this.httpClient.put('http://localhost:3200/api/update-other/' + id, other, this.httpOptions)
      .pipe(
        tap(_ => console.log(`other updated: ${id}`)),
        catchError(this.handleError<Other[]>('Update other'))
      );
  }

  deleteOther(id): Observable<Other[]> {
    return this.httpClient.delete<Other[]>('http://localhost:3200/api/delete-other/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`other deleted: ${id}`)),
        catchError(this.handleError<Other[]>('Delete other'))
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
