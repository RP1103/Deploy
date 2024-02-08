import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class L {
  _id: number;
  name: string;
  imgurl: string;
  salary: string;

}

@Injectable({
  providedIn: 'root'
})
export class LsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  creatL(l: L): Observable<any> {
    return this.httpClient.post<L>('http://localhost:3101/api/create-light', light, this.httpOptions)
      .pipe(
        catchError(this.handleError<L>('Error occured'))
      );
  }

  getLight(id): Observable<L[]> {
    return this.httpClient.get<L[]>('http://localhost:3101/api/fetch-l/' + id)
      .pipe(
        tap(_ => console.log(`l fetched: ${id}`)),
        catchError(this.handleError<L[]>(`Get l id=${id}`))
      );
  }

  getLs(): Observable<L[]> {
    return this.httpClient.get<L[]>('http://localhost:3101/api')
      .pipe(
        tap(ls => console.log('ls retrieved!')),
        catchError(this.handleError<L[]>('Get other', []))
      );
  }

  updateL(id, l: L): Observable<any> {
    return this.httpClient.put('http://localhost:3101/api/update-l/' + id, l, this.httpOptions)
      .pipe(
        tap(_ => console.log(`l updated: ${id}`)),
        catchError(this.handleError<L[]>('Update l'))
      );
  }

  deleteL(id): Observable<L[]> {
    return this.httpClient.delete<L[]>('http://localhost:3100/api/delete-l/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`l deleted: ${id}`)),
        catchError(this.handleError<L[]>('Delete l'))
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

