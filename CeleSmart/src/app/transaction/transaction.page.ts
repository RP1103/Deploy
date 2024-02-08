import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  orders: any[] = [];
  totalAmount: number = 0;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getOrders().subscribe(
      (response) => {
        // Filter out orders with empty id and no product details
        this.orders = response.orders.filter(order => 
          order._id.trim() !== '' && order.products && order.products.length > 0
        );
        
        // Calculate total amount after fetching orders
        this.calculateTotalAmount();
        
        console.log(this.orders);
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
  

  calculateTotalAmount(): void {
    this.totalAmount = this.orders.reduce((sum, order) => sum + order.totalAmount, 0);
  }
  
}