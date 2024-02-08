import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'http://localhost:3000'; // Update with your server URL

  constructor(private http: HttpClient) { }

  // Fetch all products
  getProducts(): Observable<any[]> {
    const productsUrl = `${this.apiUrl}/products`;
    return this.http.get<any[]>(productsUrl);
  }

  // Fetch product by name
  getProductByName(name: string): Observable<any> {
    const productUrl = `${this.apiUrl}/products/name/${name}`;
    return this.http.get<any>(productUrl);
  }

  // Upload product image and data
  uploadImage(data: { image: string; name: any; price: any; qty: any; size: any }): Promise<any> {
    const uploadUrl =` ${this.apiUrl}/upload`;
    return this.http.post(uploadUrl, data, { responseType: 'text' }).toPromise();
  }


  updateProduct(productId: number, productData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateProduct/${productId}`, productData);
  }
  // Delete product by ID
  deleteProduct(productId: string): Observable<any> {
    console.log(`Attempting to delete product with ID: ${productId}`);
    return this.http.delete(`${this.apiUrl}/products/${productId}`);
}
}
