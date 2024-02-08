import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Checkout {
  _id: number;
  name: string;
  city: string;
  mno: number;


}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createCheckout(checkout: Checkout): Observable<any> {
    return this.httpClient.post<Checkout>('http://localhost:3888/api/create-checkout/', checkout, this.httpOptions)
      .pipe(
        catchError(this.handleError<Checkout>('Error occured'))
      );
  }

  getCheckout(id): Observable<Checkout[]> {
    return this.httpClient.get<Checkout[]>('http://localhost:3888/api/fetch-checkout/' + id)
      .pipe(
        tap(_ => console.log(`Checkout fetched: ${id}`)),
        catchError(this.handleError<Checkout[]>(`Get Checkout id=${id}`))
      );
  }

  getCheckouts(): Observable<Checkout[]> {
    return this.httpClient.get<Checkout[]>('http://localhost:3888/api')
      .pipe(
        tap(lights => console.log('lights retrieved!')),
        catchError(this.handleError<Checkout[]>('Get other', []))
      );
  }

  updateCheckout(id, checkout: Checkout): Observable<any> {
    return this.httpClient.put('http://localhost:3888/api/update-checkout/' + id, checkout, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Checkout updated: ${id}`)),
        catchError(this.handleError<Checkout[]>('Update Checkout'))
      );
  }

  deleteCheckout(id): Observable<Checkout[]> {
    return this.httpClient.delete<Checkout[]>('http://localhost:3888/api/delete-checkout/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Checkout deleted: ${id}`)),
        catchError(this.handleError<Checkout[]>('Delete Checkout'))
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

