import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Pasta {
  _id: number;
  name: string;
  imgurl: string;
  kgs: number;
  qty: number;
  price: number;

}

@Injectable({
  providedIn: 'root'
})

export class PastasService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createPasta(pasta: Pasta): Observable<any> {
    return this.httpClient.post<Pasta>('http://localhost:3111/api/create-pasta', pasta, this.httpOptions)
      .pipe(
        catchError(this.handleError<Pasta>('Error occured'))
      );
  }

  getPasta(id): Observable<Pasta[]> {
    return this.httpClient.get<Pasta[]>('http://localhost:3111/api/fetch-pasta/' + id)
      .pipe(
        tap(_ => console.log(`pasta fetched: ${id}`)),
        catchError(this.handleError<Pasta[]>(`Get pasta id=${id}`))
      );
  }

  getPastas(): Observable<Pasta[]> {
    return this.httpClient.get<Pasta[]>('http://localhost:3111/api')
      .pipe(
        tap(pastas => console.log('pastas retrieved!')),
        catchError(this.handleError<Pasta[]>('Get pasta', []))
      );
  }

  updatePasta(id, pasta: Pasta): Observable<any> {
    return this.httpClient.put('http://localhost:3111/api/update-pasta/' + id, pasta, this.httpOptions)
      .pipe(
        tap(_ => console.log(`pasta updated: ${id}`)),
        catchError(this.handleError<Pasta[]>('Update pasta'))
      );
  }

  deletePasta(id): Observable<Pasta[]> {
    return this.httpClient.delete<Pasta[]>('http://localhost:3111/api/delete-pasta/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`pasta deleted: ${id}`)),
        catchError(this.handleError<Pasta[]>('Delete pasta'))
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
