import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarvingService } from '../_services/carving.service';
import { CarvingsService } from '../services/carvings.service';
import { CviewPage } from '../cview/cview.page';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-newcarving',
  templateUrl: './newcarving.page.html',
  styleUrls: ['./newcarving.page.scss'],
})
export class NewcarvingPage implements OnInit {

  products: any[] = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(
    private carvingService: CarvingService,
    private modalCtrl: ModalController,
    private router: Router,
    private imageService: ImageService,
    private toastController: ToastController  // Add this line
  ) {}
  

  ngOnInit() {
    this.fetchProducts();
    this.cartItemCount = this.carvingService.getCartItemCount();
  }

  fetchProducts() {
    this.imageService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data.map(product => ({ ...product, quantity: 1 })); // Initialize quantity to 1
        console.log('Fetched products:', this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
        // Handle error accordingly, e.g., display a user-friendly message
      }
    );
  }

  getImageSource(imageData: any): string {
    if (imageData && imageData.data && imageData.contentType) {
      const base64Image = btoa(String.fromCharCode(...new Uint8Array(imageData.data.data)));
      return 'data:' + imageData.contentType + ';base64,' + base64Image;
    } else {
      return ''; // Provide a default image source or handle the case where the image data is not available
    }
  }

  async addToCart(product) {
    this.carvingService.addProduct(product);
    console.log('Product added to cart:', product.name);
  
    // Display a notification
    const toast = await this.toastController.create({
      message: `${product.name} added to cart`,
      duration: 2000,  // Duration in milliseconds
      position: 'top',
      color: 'success',  // You can customize the color
      buttons: [
        {
          text: 'View Cart',
          handler: () => {
            this.router.navigate(['/products-added']);
          }
        }
      ]
    });
  
    toast.present();
  }
  

  // addToCart(product) {
  //   this.carvingService.addProduct(product);
  //   console.log('Product added to cart:', product.name);
  // }

  goToProductsAddedPage() {
    this.router.navigate(['/products-added']);
  }
}
