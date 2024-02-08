import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.page.html',
  styleUrls: ['./allorders.page.scss'],
})
export class AllordersPage implements OnInit {
[x: string]: any;
  orders: any[] = [];
  apiUrl = 'http://localhost:3500/api';

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe(
      (response) => {
        // Filter out orders with a 'success' status
        this.orders = response.orders
          .filter((order) => order._id.trim() !== '' && order.products && order.products.length > 0)
          .filter((order) => order.status !== 'success');
        console.log(this.orders);
      },
      (error) => {
        console.error('Error fetching orders:', error);
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

  countProductOrders(product: any): number {
    // Implement your logic to count orders for a specific product
    // Adjust this based on your requirements
    return 0;
  }

  markOrderComplete(order: any): void {
    this.orderService.markOrderAsSuccess(order._id).subscribe(
      (response) => {
        console.log(response);
        // Navigate to the CompletedOrdersPage after marking the order as success
        this.router.navigate(['/tabs/tab4/ordercomplete']);
        // After marking the order as success, reload the orders on this page
        this.loadOrders();
      },
      (error) => {
        console.error('Error marking order as success:', error);
      }
    );
  }
}
