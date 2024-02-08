import { Injectable } from '@angular/core';
import { Product } from '../models/other.model';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class OtherService {

  data: Product[] = [
  {id:1,
  name:'Soft bread-15 Slices',
  kgs:2,
  qty:0,
  price:80,
  imgurl: './assets/r.png',
}


  ];

  private other = [];
  private cartItemCount = new BehaviorSubject(0);


  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.other;
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

  addProduct(product) {
    let added = false;
    /*for (const p of this.other) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true; 
        break;
      }
    }*/
    if (!added) {
      product.qty = 1;
      this.other.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, item] of this.other.entries()) {
      if (item.id === product.id) {
        item.qty -= 1;
        if (item.qty === 0) {
          this.other.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, item] of this.other.entries()) {
			if (item.id === product.id) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.other.splice(index, 1);
			}
		}
  }
}
