import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarvingService {
  private apiUrl = 'http://localhost:3500/api'; // replace with your actual API URL
  private cart: any[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    this.cart.push(product);
    this.cartItemCount.next(this.cartItemCount.value + 1);
  
    if (product.image instanceof Blob) { // Check if product.image is a Blob
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('size', product.size);
      formData.append('price', product.price.toString());
      formData.append('quantity', product.quantity.toString());
      formData.append('image', product.image, `${product.name}_image.${product.image.type ? product.image.type.split('/')[1] : 'unknown'}`);
  
      this.http.post(`${this.apiUrl}/products`, formData).subscribe(
        (response) => {
          console.log('Product added successfully:', response);
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    }
  }
  

  removeProduct(index: number) {
    this.cart.splice(index, 1);
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  clearCart() {
    this.cart = [];
    this.cartItemCount.next(0);
  }
}
