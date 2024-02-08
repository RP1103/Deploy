import { Light2Service } from '../_services/light2.service';
import { Product } from '../models/light2.model';
import { Lights2Service } from '../services/lights2.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-light2view',
  templateUrl: './light2view.page.html',
  styleUrls: ['./light2view.page.scss'],
})
export class Light2viewPage implements OnInit {

  light2: Product[] = [];

  constructor(private light2Service: Light2Service,
              private lights2Service: Lights2Service,
              private modalCtrl: ModalController,

              private router: Router) { }

  ngOnInit() {
    this.light2 = this.light2Service.getCart();
  }

  decreaseCartItem(product) {
    this.light2Service.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.light2Service.addProduct(product);
  }

  removeCartItem(product) {
    this.light2Service.removeProduct(product);
  }

  getTotal() {
    return this.light2.reduce((i, j) => i + j.price * j.qty, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }

}
