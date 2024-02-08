import { Cart2Service } from '../serve/cart2.service';

//import { celesmartcol } from '../models/cart.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view1.page.html',
  styleUrls: ['./view1.page.scss'],
})
export class View1Page implements OnInit {

 // cart: celesmartcol[] = [];
 
  constructor(private cart2Service: Cart2Service,
              
              private modalCtrl: ModalController, 
              
              private router: Router) { }
 
  ngOnInit() {
   // this.cart = this.cart2Service.getCart();
  }
 
  decreaseCartItem(celesmartcol) {
    this.cart2Service.decreasecelesmartcol(celesmartcol);
  }
 
  increaseCartItem(celesmartcol) {
    this.cart2Service.addcelesmartcol(celesmartcol);
  }
 
  removeCartItem(celesmartcol) {
    this.cart2Service.removecelesmartcol(celesmartcol);
  }
 
  getTotal() {
   // return this.cart.reduce((i, j) => i + j.price * j.qty, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }
 
}
