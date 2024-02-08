import { LightService } from '../_services/light.service';
import { Product } from '../models/light.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-light-view',
  templateUrl: './light-view.page.html',
  styleUrls: ['./light-view.page.scss'],
})
export class LightViewPage implements OnInit {

  light: Product[] = [];

  constructor(private lightService: LightService,
              private modalCtrl: ModalController,

              private router: Router) { }

  ngOnInit() {
    this.light = this.lightService.getCart();
  }

  decreaseCartItem(product) {
    this.lightService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.lightService.addProduct(product);
  }

  removeCartItem(product) {
    this.lightService.removeProduct(product);
  }

  getTotal() {
    return this.light.reduce((i, j) => i + j.price * j.qty, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }

}
