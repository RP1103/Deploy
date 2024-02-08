import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

export class Carving {
  _id: number;
  imgurl: string;
  name: string;
  qty: number;
  size: string;
  price: number;
  boardExpenses: number; // New field for board expenses
  laborExpenses: number; // New field for labor expenses
  foodExpenses: number;  // New field for food expenses
  totalBoardExpenses: number = 0;
  totalLaborExpenses: number = 0;
  totalFoodExpenses: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class CarvingsService {
  private apiUrl = 'http://localhost:3100/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  uploadImage(formData: FormData): Observable<any> {
    return this.httpClient.post('http://localhost:3100/api/upload', formData);
  }

  getCarvingsExpenses(): Observable<Carving[]> {
    return this.httpClient.get<Carving[]>(`${this.apiUrl}`)
      .pipe(
        tap(carvings => console.log('carvings with expenses retrieved!')),
        catchError(this.handleError<Carving[]>('Get carvings with expenses', []))
      );
  }

  createCarvingWithImage(carving: Carving, imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);
    return this.uploadImage(formData).pipe(
      catchError(this.handleError('Image upload failed')),
      switchMap((uploadResponse) => {
        // Once the image is uploaded, create the carving with the image URL
        if (uploadResponse && uploadResponse.imgurl) {
          carving.imgurl = uploadResponse.imgurl;
          return this.createCarving(carving);
        } else {
          return of({ error: 'Image upload response is missing imgurl.' });
        }
      })
    );
  }
  
  createCarving(carving: Carving): Observable<any> {
    return this.httpClient.post<Carving>('http://localhost:3100/api/create-carving', carving, this.httpOptions)
      .pipe(
        catchError(this.handleError<Carving>('Error occurred'))
      );
  }

  getCarving(id): Observable<Carving[]> {
    return this.httpClient.get<Carving[]>('http://localhost:3100/api/fetch-carving/' + id)
      .pipe(
        tap(_ => console.log(`carving fetched: ${id}`)),
        catchError(this.handleError<Carving[]>(`Get carving id=${id}`))
      );
  }

  getCarvings(): Observable<Carving[]> {
    return this.httpClient.get<Carving[]>('http://localhost:3100/api')
      .pipe(
        tap(carvings => console.log('carvings retrieved!')),
        catchError(this.handleError<Carving[]>('Get carving', []))
      );
  }

  updateCarving(id, carving: Carving): Observable<any> {
    return this.httpClient.put('http://localhost:3100/api/update-carving/' + id, carving, this.httpOptions)
      .pipe(
        tap(_ => console.log(`carving updated: ${id}`)),
        catchError(this.handleError<Carving[]>('Update carving'))
      );
  }

  deleteCarving(id): Observable<Carving[]> {
    return this.httpClient.delete<Carving[]>('http://localhost:3100/api/delete-carving/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`carving deleted: ${id}`)),
        catchError(this.handleError<Carving[]>('Delete carving'))
      );
  }

  placeOrder(orderedProducts: any[], totalAmount: number): Observable<any> {
    const orderData = {
      products: orderedProducts.map(product => product._id), // Assuming _id is the unique identifier in Carving model
      totalAmount: totalAmount
    };

    return this.httpClient.post<any>('http://localhost:3100/place-order', orderData, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Error placing order'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
