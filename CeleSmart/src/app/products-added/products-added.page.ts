import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { CarvingService } from '../_services/carving.service';

@Component({
  selector: 'app-products-added',
  templateUrl: './products-added.page.html',
  styleUrls: ['./products-added.page.scss'],
})
export class ProductsAddedPage implements OnInit {
  addedProducts: any[] = [];
  totalAmount: number = 0;

  constructor(
    private carvingService: CarvingService,
    private alertController: AlertController,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.updateAddedProducts();
  }

  updateAddedProducts() {
    this.addedProducts = this.carvingService.getCart();
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.totalAmount = this.addedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  async confirmOrder() {
    const alert = await this.alertController.create({
      header: 'Confirm Order',
      message: `Total Amount: ${this.totalAmount.toFixed(2)} INR`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Order canceled');
          },
        },
        {
          text: 'Confirm',
          handler: () => {
            this.placeOrder();
            this.navigateBack(); // Add this line to navigate back after confirming the order
          },
        },
      ],
    });

    await alert.present();
  }

  placeOrder() {
    // Assuming each product has an 'imageData' property containing the image data
    const orderDetails = {
      products: this.addedProducts.map(product => {
        return {
          name: product.name,
          size: product.size,
          price: product.price,
          quantity: product.quantity,
          image: product.image
        };
      }),
      totalAmount: this.totalAmount
    };

    // Log size of the request data for debugging
    const dataSize = JSON.stringify(orderDetails).length;
    console.log(`Request Data Size: ${dataSize} bytes`);

    this.orderService.createOrder(orderDetails).subscribe(
      (response) => {
        console.log('Order stored successfully:', response);
        // Implement further actions if needed
      },
      (error) => {
        console.error('Error storing order:', error);
        // Handle the error accordingly, e.g., display a user-friendly message
      }
    );
  }

  // Existing methods (showThankYouAlert, getImageSource, removeProduct, clearCart)...

  // Additional method to get the base64 data URL for the image
  getImageSource(imageData: any): string {
    if (imageData && imageData.data && imageData.contentType) {
      const base64Image = btoa(String.fromCharCode(...new Uint8Array(imageData.data.data)));
      return 'data:' + imageData.contentType + ';base64,' + base64Image;
    } else {
      return ''; // Provide a default image source or handle the case where the image data is not available
    }
  }

  removeProduct(index: number) {
    this.carvingService.removeProduct(index);
    this.updateAddedProducts();
  }

  navigateBack() {
    this.router.navigate(['/tabs/newcarving']);
  }
}
