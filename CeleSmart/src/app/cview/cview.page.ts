import { CarvingService } from '../_services/carving.service';
import { Product } from '../models/carving.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cview',
  templateUrl: './cview.page.html',
  styleUrls: ['./cview.page.scss'],
})
export class CviewPage implements OnInit {

  carving: Product[] = [];

  constructor(private carvingService: CarvingService,
              private modalCtrl: ModalController,

              private router: Router) { }

  ngOnInit() {
    this.carving = this.carvingService.getCart();
  }

  // decreaseCartItem(product) {
  //   this.carvingService.decreaseProduct(product);
  // }

  // increaseCartItem(product) {
  //   this.carvingService.addProduct(product);
  // }

  // removeCartItem(product) {
  //   this.carvingService.removeProduct(product);
  // }

  // getTotal() {
  //   return this.carving.reduce((i, j) => i + j.price * j.qty, 0);
  // }

  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }

}
