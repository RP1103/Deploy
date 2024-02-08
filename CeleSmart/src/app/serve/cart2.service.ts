import { Injectable } from '@angular/core';
//import { celesmartcol } from '../models/cart.model';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class Cart2Service {

  data: Product[] = [
    { id: 1,
      imgurl: './assets/w1.jpg',
      name: 'Soft bread-15 slices',
      price:80,
      qty: 15  
    },
    { id: 2,
      imgurl: './assets/wbread.jpg',
      name: 'Pure wheat bread with high Protein-12 pieces',
      price: 90,
      qty: 12 
    },
    { id: 3,
      imgurl: './assets/ri1.jpg',
      name: 'Instant Coconut Rice Mix-500g',
      price: 140,
      qty: 10
    },
    { id: 4,
        imgurl: './assets/ri2.jpg',
        name: 'Instant Ven Pongal Mix-500g',
        price: 100,
        qty: 10
      },
      { id: 5,
        imgurl: './assets/ri3.jpg',
        name: 'Instant Vegitable Rice Mix-500g',
        price: 150,
        qty: 10
      },
      { id: 6,
        imgurl: './assets/ri4.jpg',
        name: 'Instant Lemon Rice-500g',
        price: 100,
        qty: 10
      },
      { id: 7,
        imgurl: './assets/ri5.jpg',
        name: 'Rice idly mix-500g' ,
        price: 85,
        qty: 10
      },
      { id: 8,
        imgurl: './assets/rus.jpg',
        name: 'Yummy rusks-100g',
        price: 100,
        qty: 10
      }
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);


  constructor() { }

  getcelesmartcols(){
    return this.data;
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
