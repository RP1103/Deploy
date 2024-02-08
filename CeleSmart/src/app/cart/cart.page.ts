import { Component } from '@angular/core';
import { Cart2Service } from '../services/cart2.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.page.html',
  styleUrls: ['cart.page.scss'],
})
export class CartPage {
  cart: any[];

  constructor(private cart2Service: Cart2Service) {
    this.cart = cart2Service.getCart();
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.carving.price * item.quantity, 0);
  }

  removeItem(index: number) {
    this.cart2Service.removeFromCart(index);
  }

  clearCart() {
    this.cart2Service.clearCart();
  }
}
