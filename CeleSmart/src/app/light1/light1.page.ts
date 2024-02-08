import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Light1viewPage } from '../light1view/light1view.page';
import { Lights1Service } from '../services/lights1.service';
import { Light1Service } from '../_services/light1.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-light1',
  templateUrl: './light1.page.html',
  styleUrls: ['./light1.page.scss'],
})
export class Light1Page implements OnInit {
  
  lights1: any = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
   

  constructor( private lights1Service: Lights1Service,private light1Service: Light1Service, private  modalCtrl: ModalController ) { }

  ngOnInit() {
    this.products = this.light1Service.getProducts();
    this.lights1 = this.light1Service.getCart();
    this.cartItemCount = this.light1Service.getCartItemCount();}

    addToCart(product) {
      this.light1Service.addProduct(product);
    
    }
    
    async openCart() {
    
      const modal = await this.modalCtrl.create({
        component: Light1viewPage,
        cssClass: 'light1-modal'
      });
      modal.onWillDismiss().then(() => {
    
      });
      modal.present();
    }


  ionViewDidEnter() {
    this.lights1Service.getLights1().subscribe((response) => {
      this.lights1 = response;
    });
  }
  
  }