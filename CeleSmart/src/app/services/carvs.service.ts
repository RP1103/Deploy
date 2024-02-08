import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Carv {
  _id: number;
  name: string;
  imagurl: string;
  qty: number;
  price: number;

}

@Injectable({
  providedIn: 'root'
})
export class CarvsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatCarv(carv: Carv): Observable<any> {
    return this.httpClient.post<Carv>('http://localhost:3009/api/create-carv', carv, this.httpOptions)
      .pipe(
        catchError(this.handleError<Carv>('Error occured'))
      );
  }

  getCarv(id): Observable<Carv[]> {
    return this.httpClient.get<Carv[]>('http://localhost:3009/api/fetch-carv/' + id)
      .pipe(
        tap(_ => console.log(`carv fetched: ${id}`)),
        catchError(this.handleError<Carv[]>(`Get carv id=${id}`))
      );
  }

  getCarvs(): Observable<Carv[]> {
    return this.httpClient.get<Carv[]>('http://localhost:3009/api')
      .pipe(
        tap(lights => console.log('lights retrieved!')),
        catchError(this.handleError<Carv[]>('Get other', []))
      );
  }

  updateCarv(id, carv: Carv): Observable<any> {
    return this.httpClient.put('http://localhost:3009/api/update-carv/' + id, carv, this.httpOptions)
      .pipe(
        tap(_ => console.log(`carv updated: ${id}`)),
        catchError(this.handleError<Carv[]>('Update carv'))
      );
  }

  deleteCarv(id): Observable<Carv[]> {
    return this.httpClient.delete<Carv[]>('http://localhost:3009/api/delete-carv/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`carv deleted: ${id}`)),
        catchError(this.handleError<Carv[]>('Delete carv'))
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

