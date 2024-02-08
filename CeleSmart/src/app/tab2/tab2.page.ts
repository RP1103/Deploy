import { Component, OnInit} from '@angular/core';
import { Cart1Service } from '../services/cart1.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ViewPage } from '../view/view.page';
import { PastasService } from '../services/pastas.service';
import { PastaService } from './../_services/pasta.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],

})
export class Tab2Page implements OnInit{
  pastas: any = [];
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private pastaService: PastaService,private pastasService: PastasService,
     private modalCtrl: ModalController) {}

  ionViewDidEnter() {
    this.pastasService.getPastas().subscribe((response) => {
      this.pastas = response;
    })
  }

  ngOnInit(){
    this.products = this.pastaService.getProducts();
    this.pastas = this.pastaService.getCart();
    this.cartItemCount = this.pastaService.getCartItemCount();

  }

  addToCart(product) {
    this.pastaService.addProduct(product);
    console.log('product added:'+product.name);
    
  }
  async openCart() {
   
    let modal = await this.modalCtrl.create({
      component: ViewPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      
    });
    modal.present();
  }

 

}

