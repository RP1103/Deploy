import { Component, OnInit} from '@angular/core';
import { Cart2Service } from '../serve/cart2.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

import { CvotherPage } from '../cvother/cvother.page';
import { OtherService } from '../_services/other.service';
import { OthersService } from '../services/others.service';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],

})
export class Tab3Page implements OnInit{
  others = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private otherService: OtherService,private othersService: OthersService,
     private modalCtrl: ModalController) {}
 
  ngOnInit(){
    this.products = this.otherService.getProducts();
    this.others = this.otherService.getCart();
    this.cartItemCount = this.otherService.getCartItemCount();

  }

  addToCart(product) { 
    this.otherService.addProduct(product);
    console.log('product added:'+product.name);
  }
 
  async openCart() {
   
    const modal = await this.modalCtrl.create({
      component: CvotherPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      
    });
    modal.present();
  }
 
  ionViewDidEnter() {
    this.othersService.getOthers().subscribe((response) => {
      this.others = response;
    })
  }

}
