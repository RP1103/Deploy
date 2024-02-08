import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarvingService } from '../_services/carving.service';
import { CarvingsService } from '../services/carvings.service';
import { CviewPage } from '../cview/cview.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carving',
  templateUrl: 'carving.page.html',
  styleUrls: ['carving.page.scss'],
})
export class CarvingPage implements OnInit {
  carvings: any = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  filterTerm: string = '';

  constructor(
    private carvingService: CarvingService,
    private carvingsService: CarvingsService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    // this.products = this.carvingService.getProducts();
    this.cartItemCount = this.carvingService.getCartItemCount();
    this.loadCarvings();
  }

  loadCarvings() {
    this.carvingsService.getCarvings().subscribe((response) => {
      this.carvings = response;
    });
  }

  addToCart(product) {
    this.carvingService.addProduct(product);
    console.log('Product added to cart:', product.name);
  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CviewPage,
      cssClass: 'light-modal',
    });
    modal.onWillDismiss().then(() => {});
    modal.present();
  }

  goToProductsAddedPage() {
    this.router.navigate(['/products-added']);
  }
}
