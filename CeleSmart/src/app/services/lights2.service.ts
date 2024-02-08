import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Light2 {
  _id: number;
  name: string;
  imagurl: string;
  qty: number;
  price: number;

}

@Injectable({
  providedIn: 'root'
})
export class Lights2Service {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatLight2(light2: Light2): Observable<any> {
    return this.httpClient.post<Light2>('http://localhost:3103/api/create-light2', light2, this.httpOptions)
      .pipe(
        catchError(this.handleError<Light2>('Error occured'))
      );
  }

  getLight2(id): Observable<Light2[]> {
    return this.httpClient.get<Light2[]>('http://localhost:3103/api/fetch-light2/' + id)
      .pipe(
        tap(_ => console.log(`light2 fetched: ${id}`)),
        catchError(this.handleError<Light2[]>(`Get light2 id=${id}`))
      );
  }

  getLights2(): Observable<Light2[]> {
    return this.httpClient.get<Light2[]>('http://localhost:3103/api')
      .pipe(
        tap(lights2 => console.log('lights2 retrieved!')),
        catchError(this.handleError<Light2[]>('Get other', []))
      );
  }

  updateLight2(id, light2: Light2): Observable<any> {
    return this.httpClient.put('http://localhost:3103/api/update-light2/' + id, light2, this.httpOptions)
      .pipe(
        tap(_ => console.log(`light2 updated: ${id}`)),
        catchError(this.handleError<Light2[]>('Update light2'))
      );
  }

  deleteLight2(id): Observable<Light2[]> {
    return this.httpClient.delete<Light2[]>('http://localhost:3103/api/delete-light2/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`light2 deleted: ${id}`)),
        catchError(this.handleError<Light2[]>('Delete light'))
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

