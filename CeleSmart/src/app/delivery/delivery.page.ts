import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage  {

  trackingNumber: string;
  deliverySteps: any[] = [];
  constructor() {}

  trackDelivery() {
    // Simulated tracking data (Replace with actual API call)
    this.deliverySteps = [
      { status: 'Order Placed', description: 'Your order has been placed.', timestamp: new Date() },
      { status: 'Shipped', description: 'Your order has been shipped.', timestamp: new Date(Date.now() - 86400000) },
      { status: 'Out for Delivery', description: 'Your order is out for delivery.', timestamp: new Date(Date.now() - 43200000) },
      { status: 'Delivered', description: 'Your order has been delivered.', timestamp: new Date() }
    ];
  }
}
