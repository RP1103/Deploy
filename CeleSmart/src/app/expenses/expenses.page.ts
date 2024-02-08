// expenses.page.ts
import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage {
  carving = {
    boardExpenses: 0,
    laborExpenses: 0,
    foodExpenses: 0,
  };

  constructor(private orderService: OrderService) {}

  createCarving() {
    // Assuming you have a method like createCarvingExpenses in your OrderService
    this.orderService.createCarvingExpenses(this.carving).subscribe(
      (response) => {
        console.log('Carving expenses stored successfully:', response);
        // Implement further actions if needed
      },
      (error) => {
        console.error('Error storing carving expenses:', error);
        // Handle the error accordingly, e.g., display a user-friendly message
      }
    );
  }


  isFormValid(): boolean {
    // Add your form validation logic here
    return true;
  }
}
