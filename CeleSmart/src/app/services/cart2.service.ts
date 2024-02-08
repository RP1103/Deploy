import { Injectable } from '@angular/core';
import { CarvingsService, Carving } from './carvings.service';

@Injectable({
  providedIn: 'root'
})
export class Cart2Service {
  private cart: any[] = [];

  constructor(private carvingsService: CarvingsService) {}

  getCart() {
    return this.cart;
  }

  addToCart(carvingId: number, quantity: number) {
    this.carvingsService.getCarving(carvingId).subscribe((carvings: Carving[]) => {
      if (carvings && carvings.length > 0) {
        const carving = carvings[0];
        const item = this.cart.find((cartItem) => cartItem.carving._id === carving._id);
        if (item) {
          item.quantity += quantity;
        } else {
          this.cart.push({ carving, quantity });
        }
      } else {
        console.error(`Carving with ID ${carvingId} not found.`);
      }
    });
  }
  

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  clearCart() {
    this.cart = [];
  }
}
