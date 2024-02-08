import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Light {
  _id: number;
  name: string;
  imagurl: string;
  qty: number;
  price: number;

}

@Injectable({
  providedIn: 'root'
})
export class LightsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatLight(light: Light): Observable<any> {
    return this.httpClient.post<Light>('http://localhost:3101/api/create-light', light, this.httpOptions)
      .pipe(
        catchError(this.handleError<Light>('Error occured'))
      );
  }

  getLight(id): Observable<Light[]> {
    return this.httpClient.get<Light[]>('http://localhost:3101/api/fetch-light/' + id)
      .pipe(
        tap(_ => console.log(`light fetched: ${id}`)),
        catchError(this.handleError<Light[]>(`Get light id=${id}`))
      );
  }

  getLights(): Observable<Light[]> {
    return this.httpClient.get<Light[]>('http://localhost:3101/api')
      .pipe(
        tap(lights => console.log('lights retrieved!')),
        catchError(this.handleError<Light[]>('Get other', []))
      );
  }

  updateLight(id, light: Light): Observable<any> {
    return this.httpClient.put('http://localhost:3101/api/update-light/' + id, light, this.httpOptions)
      .pipe(
        tap(_ => console.log(`light updated: ${id}`)),
        catchError(this.handleError<Light[]>('Update light'))
      );
  }

  deleteLight(id): Observable<Light[]> {
    return this.httpClient.delete<Light[]>('http://localhost:3100/api/delete-light/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`light deleted: ${id}`)),
        catchError(this.handleError<Light[]>('Delete light'))
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

