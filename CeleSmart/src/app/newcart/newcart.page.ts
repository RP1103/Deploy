import { Component, OnInit } from '@angular/core';
import { NcartService } from '../_services/ncart.service';

@Component({
  selector: 'app-newcart',
  templateUrl: './newcart.page.html',
  styleUrls: ['./newcart.page.scss'],
})
export class NewcartPage implements OnInit {

  cartItems: any[];

  constructor(private ncartService: NcartService) {}

  ngOnInit() {
    this.cartItems = this.ncartService.getCart();
  }

  reduceQuantity(item) {
    this.ncartService.reduceQuantity(item);
  }

  increaseQuantity(item) {
    this.ncartService.increaseQuantity(item);
  }

  removeFromCart(item) {
    this.ncartService.removeFromCart(item);
  }

  getTotalPrice() {
    return this.ncartService.getTotalPrice();
  }
}
