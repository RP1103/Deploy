import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NcartService {
  private cartItems: any[] = [];

  constructor() {}

  getCart() {
    return this.cartItems;
  }

  addToCart(product) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  reduceQuantity(item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.removeFromCart(item);
    }
  }

  increaseQuantity(item) {
    item.quantity += 1;
  }

  removeFromCart(item) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
