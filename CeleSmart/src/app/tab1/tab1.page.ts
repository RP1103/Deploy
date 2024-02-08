/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import { cartService } from '../_services/cart.service';
import { IonSlides, ModalController } from '@ionic/angular';
import { productCrudService } from './../service/product-crud.service';
import { BehaviorSubject } from 'rxjs';
import { CartviewPage } from '../cartview/cartview.page';
import { FeedService } from '../_services/feed.service';
import { FeedsService } from '../services/feeds.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],

})
export class Tab1Page implements OnInit{
  

  products= [];
  cart = [];
  cartItemCount: BehaviorSubject<number>;
  feeds = [];
  feed = [];

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  @ViewChild('slides') slides: IonSlides;
  slideOpts: any = {};
  slideImages: any[] = [];
  

  constructor(private productCrudService: productCrudService,private cartService: cartService,
    private feedService: FeedService,private feedsService:FeedsService,   private  modalCtrl: ModalController) {}

  

  ionViewDidEnter() {
    this.slides.startAutoplay();
 
    this.productCrudService.getproducts().subscribe((response) => {
      this.products = response;
      
    this.feedsService.getFeeds().subscribe((response) => {
      this.feeds = response;
    })  
    })
  }


  ngOnInit(){
    this.feeds = this.feedService.getFeeds();
    this.feeds = this.feedService.getCart();
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.slideImages = [
      'assets/sr1.jpg',
      'assets/sri.jpg',
      'assets/s2.jpg',
    ];
   
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    console.log('product added:'+product.name);
    
  }
  async openCart() {
   
    const modal = await this.modalCtrl.create({
      component: CartviewPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      
    });
    modal.present();

  }


}
