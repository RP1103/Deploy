import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class product {
  _id: number;
  name: string;
  kgs: number;
  qty: number;
  price: number;

}

@Injectable({
  providedIn: 'root'
})

export class productCrudService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createproduct(product: product): Observable<any> {
    return this.httpClient.post<product>('http://localhost:3000/api/create-product', product, this.httpOptions)
      .pipe(
        catchError(this.handleError<product>('Error occured'))
      );
  }

  getproduct(id): Observable<product[]> {
    return this.httpClient.get<product[]>('http://localhost:3000/api/fetch-product/' + id)
      .pipe(
        tap(_ => console.log(`product fetched: ${id}`)),
        catchError(this.handleError<product[]>(`Get product id=${id}`))
      );
  }

  getproducts(): Observable<product[]> {
    return this.httpClient.get<product[]>('http://localhost:3000/api')
      .pipe(
        tap(products => console.log('products retrieved!')),
        catchError(this.handleError<product[]>('Get product', []))
      );
  }

  updateproduct(id, product: product): Observable<any> {
    return this.httpClient.put('http://localhost:3000/api/update-product/' + id, product, this.httpOptions)
      .pipe(
        tap(_ => console.log(`product updated: ${id}`)),
        catchError(this.handleError<product[]>('Update product'))
      );
  }

  deleteproduct(id): Observable<product[]> {
    return this.httpClient.delete<product[]>('http://localhost:3000/api/delete-product/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`product deleted: ${id}`)),
        catchError(this.handleError<product[]>('Delete product'))
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
