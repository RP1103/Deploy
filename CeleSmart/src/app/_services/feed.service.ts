
import { Injectable } from '@angular/core';
import { Feed } from '../models/feed.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedService {


  data: Feed[] = [];

  private feed = [];
  private cartItemCount = new BehaviorSubject(0);



  constructor() { }

  getFeeds(){
    return this.data;
  }

  getCart(){
    return this.feed;
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

  addFeed(feed) {
    let added = false;
    /*for (let p of this.feed) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }*/
    if (!added) {
        feed.qty = 1;
      this.feed.push(feed);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseFeed(feed) {
    for (const [index, item] of this.feed.entries()) {
			if (item.id === feed.id) {
				item.qty -= 1;
				if (item.qty === 0) {
					this.feed.splice(index, 1);
				}
			}
		}
		this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeFeed(feed) {
    for (const [index, item] of this.feed.entries()) {
			if (item.id === feed.id) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.feed.splice(index, 1);
			}
		}
  }
}
