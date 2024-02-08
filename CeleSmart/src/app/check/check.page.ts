import { Component } from '@angular/core';
import { Cart2Service } from '../services/cart2.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage  {

  cart: any[];

  constructor(private cart2Service: Cart2Service) {
    this.cart = cart2Service.getCart();
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.carving.price * item.quantity, 0);
  }
}
