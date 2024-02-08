// import { BehaviorSubject } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class OrderService {
//   private apiUrl = 'http://localhost:3500/api';

//   private pendingOrdersSubject = new BehaviorSubject<any[]>([]);
//   private deliveredOrdersSubject = new BehaviorSubject<any[]>([]);

//   pendingOrders$ = this.pendingOrdersSubject.asObservable();
//   deliveredOrders$ = this.deliveredOrdersSubject.asObservable();


//   constructor(private http: HttpClient) {}

//   markOrderAsComplete(order: any): void {
//     // Logic to mark order as complete (e.g., sending a request to the backend)
//     console.log('Marking order as complete:', order);

//     // Update the completed orders list
//     const currentOrders = this.pendingOrdersSubject.value;
//     this.pendingOrdersSubject.next([...currentOrders, order]);
//   }

//   markOrderAsDelivered(order: any): void {
//     // Logic to mark order as delivered (e.g., sending a request to the backend)
//     console.log('Marking order as delivered:', order);

//     // Move the order from pending to delivered
//     const pendingOrders = this.pendingOrdersSubject.value.filter(o => o._id !== order._id);
//     const deliveredOrders = this.deliveredOrdersSubject.value.concat(order);

//     this.pendingOrdersSubject.next(pendingOrders);
//     this.deliveredOrdersSubject.next(deliveredOrders);
//   }
  
//   placeOrder(orderDetails: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/orders`, orderDetails)
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           console.error('Error storing order:', error);
//           return throwError(error);
//         })
//       );
//   }

//   createOrder(orderDetails: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/orders`, orderDetails)
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           console.error('Error storing order:', error);
//           return throwError(error);
//         })
//       );
//   }

//   getOrders(): Observable<any> {
//     const endpoint = `${this.apiUrl}/get-orders`;
//     return this.http.get(endpoint)
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           console.error('Error fetching orders:', error);
//           return throwError(error);
//         })
//       );
//   }

//   getCarvingExpenses(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/get-carving-expenses`)
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           console.error('Error fetching carving expenses:', error);
//           return throwError(error);
//         })
//       );
//   }

// createCarvingExpenses(expenses: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/carvingExpenses`, expenses)
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           console.error('Error storing carving expenses:', error);
//           return throwError(error);
//         })
//       );
//   }

// }
 // order.service.ts
 // order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:3500/api';

  private pendingOrdersSubject = new BehaviorSubject<any[]>([]);
  private deliveredOrdersSubject = new BehaviorSubject<any[]>([]);

  pendingOrders$ = this.pendingOrdersSubject.asObservable();
  deliveredOrders$ = this.deliveredOrdersSubject.asObservable();

  constructor(private http: HttpClient) {}

  markOrderAsComplete(order: any): void {
    // Logic to mark order as complete (e.g., sending a request to the backend)
    console.log('Marking order as complete:', order);

    // Update the completed orders list
    const currentOrders = this.pendingOrdersSubject.value;
    this.pendingOrdersSubject.next([...currentOrders, order]);
  }

  markOrderAsDelivered(order: any): void {
    // Logic to mark order as delivered (e.g., sending a request to the backend)
    console.log('Marking order as delivered:', order);

    // Move the order from pending to delivered
    const pendingOrders = this.pendingOrdersSubject.value.filter(o => o._id !== order._id);
    const deliveredOrders = this.deliveredOrdersSubject.value.concat(order);

    this.pendingOrdersSubject.next(pendingOrders);
    this.deliveredOrdersSubject.next(deliveredOrders);
  }

  markOrderAsSuccess(orderId: string): Observable<any> {
    const url = `${this.apiUrl}/markOrderAsSuccess`;
    const body = { orderId };
    return this.http.post(url, body)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error marking order as success:', error);
          return throwError(error);
        })
      );
  }

  placeOrder(orderDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders`, orderDetails)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error storing order:', error);
          return throwError(error);
        })
      );
  }

  createOrder(orderDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders`, orderDetails)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error storing order:', error);
          return throwError(error);
        })
      );
  }

  getOrders(): Observable<any> {
    const endpoint = `${this.apiUrl}/get-orders`;
    return this.http.get(endpoint)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching orders:', error);
          return throwError(error);
        })
      );
  }

  getCarvingExpenses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-carving-expenses`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching carving expenses:', error);
          return throwError(error);
        })
      );
  }

  createCarvingExpenses(expenses: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/carvingExpenses`, expenses)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error storing carving expenses:', error);
          return throwError(error);
        })
      );
  }
  getSuccessfulOrders(): Observable<any> {
    const endpoint = `${this.apiUrl}/get-successful-orders`;
    return this.http.get(endpoint)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching successful orders:', error);
          return throwError(error);
        })
      );
  }

}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { tap } from 'rxjs/operators';
// export class Carving {

//   boardExpenses: number; 
//   laborExpenses: number; 
//   foodExpenses: number;  

// }
// @Injectable({
//   providedIn: 'root',
// })
// export class OrderService {
//   private apiUrl = 'http://localhost:3500/api';

//   constructor(private http: HttpClient) {}

//   placeOrder(orderDetails: any): Observable<any> {
//     const formData = new FormData();
  
//     formData.append('orderDetails', JSON.stringify(orderDetails));
  
//     orderDetails.products.forEach((product, index) => {
//       formData.append(`images`, product.image, `image${index + 1}.${product.image.type.split('/')[1]}`);
//     });
  
//     return this.http.post(`${this.apiUrl}/orders`, formData);
//   }



//   createOrder(orderDetails: any): Observable<any> {
//     return this.http.post(this.apiUrl, orderDetails);
//   }

//   getOrders(): Observable<any> {
//     const endpoint = `${this.apiUrl}/get-orders`;
//     return this.http.get(endpoint)
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           console.error('Error fetching orders:', error);
//           return throwError(error);
//         })
//       );
//   }
//   getCarvingExpenses(): Observable<any> {
//     const url = `${this.apiUrl}/get-carvings-expenses`;
//     return this.http.get(url)
//       .pipe(
//         catchError((error: HttpErrorResponse) => {
//           console.error('Error fetching carving expenses:', error);
//           return throwError(error);
//         })
//       );
//   }
  
//   getCarvingsExpenses(): Observable<any> {
//     const url = `${this.apiUrl}/get-carvings-expenses`;
//     return this.http.get<Carving[]>(url)
//       .pipe(
//         tap(carvings => console.log('Carvings with expenses retrieved!', carvings)),
//         catchError(this.handleError<any>('Get carvings with expenses', []))
//       );
//   }

//   createCarvingExpenses(carving: any): Observable<any> {
//     const url = `${this.apiUrl}/carvingExpenses`;
//     return this.http.post(url, carving);
//   }


//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(`${operation} failed: ${error.message}`);
//       return throwError(result as T);
//     };
//   }
// }
