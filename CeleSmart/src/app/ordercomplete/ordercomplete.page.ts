// import { Component, OnInit } from '@angular/core';
// import { OrderService } from '../services/order.service';

// @Component({
//   selector: 'app-ordercomplete',
//   templateUrl: './ordercomplete.page.html',
//   styleUrls: ['./ordercomplete.page.scss'],
// })
// export class OrdercompletePage implements OnInit {
//   deliveredOrders: any[] = [];

//   constructor(private orderService: OrderService) {}

//   ngOnInit(): void {
//     this.orderService.deliveredOrders$.subscribe(orders => {
//       this.deliveredOrders = orders;
//     });
//   }
//   getImageSource(imageData: any): string {
//     if (imageData && imageData.data && imageData.contentType) {
//       const base64Image = btoa(String.fromCharCode(...new Uint8Array(imageData.data.data)));
//       return 'data:' + imageData.contentType + ';base64,' + base64Image;
//     } else {
//       return ''; // Provide a default image source or handle the case where the image data is not available
//     }
//   }
// }
// ordercomplete.page.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-ordercomplete',
  templateUrl: './ordercomplete.page.html',
  styleUrls: ['./ordercomplete.page.scss'],
})
export class OrdercompletePage implements OnInit {
  successfulOrders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadSuccessfulOrders();
  }

  loadSuccessfulOrders() {
    this.orderService.getSuccessfulOrders().subscribe(
      (response) => {
        this.successfulOrders = response.orders.filter(
          (order) => order._id.trim() !== '' && order.products && order.products.length > 0
        );
      },
      (error) => {
        console.error('Error fetching successful orders:', error);
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

  }

