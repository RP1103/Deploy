import { Component, OnInit } from '@angular/core';
import { LightService } from '../_services/light.service';
import { LightsService } from '../services/lights.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { LightViewPage } from '../light-view/light-view.page';

@Component({
  selector: 'app-light',
  templateUrl: './light.page.html',
  styleUrls: ['./light.page.scss'],
})
export class LightPage implements OnInit {

  lights = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private lightService: LightService,private lightsService: LightsService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.products = this.lightService.getProducts();
    this.lights = this.lightService.getCart();
    this.cartItemCount = this.lightService.getCartItemCount();

}
addToCart(product) {
  this.lightService.addProduct(product);

}

async openCart() {

  const modal = await this.modalCtrl.create({
    component: LightViewPage,
    cssClass: 'light-modal'
  });
  modal.onWillDismiss().then(() => {

  });
  modal.present();
}

ionViewDidEnter() {
  this.lightsService.getLights().subscribe((response) => {
    this.lights = response;
  });
}

}




