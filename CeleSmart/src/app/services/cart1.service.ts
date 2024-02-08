import { Injectable } from '@angular/core';
//import { celesmartcol } from '../models/cart.model';
import { BehaviorSubject } from 'rxjs';
import { productCrudService } from './../service/product-crud.service';

@Injectable({
  providedIn: 'root'
})
export class Cart1Service {

 
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);


  constructor() { }

  getcelesmartcols(){
   // return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

  addcelesmartcol(celesmartcol) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === celesmartcol.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      celesmartcol.qty = 1;
      this.cart.push(celesmartcol);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreasecelesmartcol(celesmartcol) {
    for (const [index, item] of this.cart.entries()) {
			if (item.id === celesmartcol.id) {
				item.qty -= 1;
				if (item.qty === 0) {
					this.cart.splice(index, 1);
				}
			}
		}
		this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removecelesmartcol(celesmartcol) {
    for (const [index, item] of this.cart.entries()) {
			if (item.id === celesmartcol.id) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.cart.splice(index, 1);
			}
		}
  }
}
