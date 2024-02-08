 // data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3003/products'; // Update with your server URL

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  updateProduct(product: any): Observable<any> {
    if (!product || !product._id || !product.name || !product.price || !product.qty || !product.size) {
      console.error('Invalid product data:', product);
      return throwError('Invalid product data');
    }

    const updateUrl = `${this.apiUrl}/${product._id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    console.log('Data to be sent:', product);

    return this.http
      .put(updateUrl, product, { headers, observe: 'response' })
      .pipe(
        catchError((error) => {
          console.error('Error updating product:', error);
          return throwError('Error updating product');
        })
      );
  }
}
 