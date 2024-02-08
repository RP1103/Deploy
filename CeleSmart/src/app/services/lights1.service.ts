import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Light1 {
  _id: number;
  name: string;
  imagurl: string;
  qty: number;
  price: number;

}

@Injectable({
  providedIn: 'root'
})
export class Lights1Service {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatLight1(light1: Light1): Observable<any> {
    return this.httpClient.post<Light1>('http://localhost:3102/api/create-light1', light1, this.httpOptions)
      .pipe(
        catchError(this.handleError<Light1>('Error occured'))
      );
  }

  getLight1(id): Observable<Light1[]> {
    return this.httpClient.get<Light1[]>('http://localhost:3102/api/fetch-light1/' + id)
      .pipe(
        tap(_ => console.log(`light1 fetched: ${id}`)),
        catchError(this.handleError<Light1[]>(`Get light1 id=${id}`))
      );
  }

  getLights1(): Observable<Light1[]> {
    return this.httpClient.get<Light1[]>('http://localhost:3102/api')
      .pipe(
        tap(lights1 => console.log('lights1 retrieved!')),
        catchError(this.handleError<Light1[]>('Get other', []))
      );
  }

  updateLight1(id, light1: Light1): Observable<any> {
    return this.httpClient.put('http://localhost:3102/api/update-light1/' + id, light1, this.httpOptions)
      .pipe(
        tap(_ => console.log(`light1 updated: ${id}`)),
        catchError(this.handleError<Light1[]>('Update light1'))
      );
  }

  deleteLight1(id): Observable<Light1[]> {
    return this.httpClient.delete<Light1[]>('http://localhost:3102/api/delete-light1/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`light1 deleted: ${id}`)),
        catchError(this.handleError<Light1[]>('Delete light1'))
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

