import { Injectable } from '@angular/core';
import { Product } from '../models/cart1.model';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class cart1Service {
 
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  data: any;


  constructor() { }

  getUsers(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

  addUser(user) {
    let added = false;
    /*for (let p of this.cart) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }*/
    if (!added) {
      user.qty = 1;
      this.cart.push(user);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseUser(user) {
    for (const [index, item] of this.cart.entries()) {
      if (item.id === user.id) {
        item.qty -= 1;
        if (item.qty == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeUser(user) {
    for (const [index, item] of this.cart.entries()) {
			if (item.id === user.id) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.cart.splice(index, 1);
			}
		}
  }
}
