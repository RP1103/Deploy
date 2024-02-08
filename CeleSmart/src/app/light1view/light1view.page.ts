import { Light1Service } from '../_services/light1.service';
import { Product } from '../models/light1.model';
import { Lights1Service } from '../services/lights1.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-light1view',
  templateUrl: './light1view.page.html',
  styleUrls: ['./light1view.page.scss'],
})
export class Light1viewPage implements OnInit {

  light1: Product[] = [];

  constructor(private light1Service: Light1Service,
              private lights1Service: Lights1Service,
              private modalCtrl: ModalController,

              private router: Router) { }

  ngOnInit() {
    this.light1 = this.light1Service.getCart();
  }

  decreaseCartItem(product) {
    this.light1Service.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.light1Service.addProduct(product);
  }

  removeCartItem(product) {
    this.light1Service.removeProduct(product);
  }

  getTotal() {
    return this.light1.reduce((i, j) => i + j.price * j.qty, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }

}
