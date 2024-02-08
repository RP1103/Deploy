import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Light2viewPage } from '../light2view/light2view.page';
import { Lights2Service } from '../services/lights2.service';
import { Light2Service } from '../_services/light2.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-light2',
  templateUrl: './light2.page.html',
  styleUrls: ['./light2.page.scss'],
})
export class Light2Page implements OnInit {
  
  lights2: any = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
   

  constructor( private lights2Service: Lights2Service,private light2Service: Light2Service, private  modalCtrl: ModalController ) { }

  ngOnInit() {
    this.products = this.light2Service.getProducts();
    this.lights2 = this.light2Service.getCart();
    this.cartItemCount = this.light2Service.getCartItemCount();}

    addToCart(product) {
      this.light2Service.addProduct(product);
    
    }
    
    async openCart() {
    
      const modal = await this.modalCtrl.create({
        component: Light2viewPage,
        cssClass: 'light2-modal'
      });
      modal.onWillDismiss().then(() => {
    
      });
      modal.present();
    }


  ionViewDidEnter() {
    this.lights2Service.getLights2().subscribe((response) => {
      this.lights2 = response;
    });
  }
  
  }