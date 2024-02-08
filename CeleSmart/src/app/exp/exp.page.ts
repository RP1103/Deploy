import { Component, OnInit } from '@angular/core';
// import { CarvingsService } from '../services/carvings.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-exp',
  templateUrl: 'exp.page.html',
  styleUrls: ['exp.page.scss']
})
export class ExpPage implements OnInit {
  orders: any[] = [];
  carvings: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.fetchOrders();
    this.fetchCarvingExpenses();
  }

  calculateTotalQuantity(products: any[]): number {
    return products.reduce((acc, product) => acc + product.quantity, 0);
  }
  
  
  
  fetchCarvingExpenses(): void {
    this.orderService.getCarvingExpenses().subscribe(
      expenses => {
        console.log('Fetched expenses:', expenses);
        // Assign the fetched expenses to the carvings array
        this.carvings = expenses;
      },
      error => {
        console.error('Error fetching expenses:', error);
        // Handle error, e.g., show an error message
      }
    );
  }

  fetchOrders(): void {
    this.orderService.getOrders().subscribe(
      (response) => {
        // Filter out orders with empty id and no product details
        this.orders = response.orders.filter(order => 
          order._id.trim() !== '' && order.products && order.products.length > 0
        );
        console.log(this.orders);
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
  
}
