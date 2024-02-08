import { OtherService } from '../_services/other.service';
import { Product } from '../models/other.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cvother',
  templateUrl: './cvother.page.html',
  styleUrls: ['./cvother.page.scss'],
})
export class CvotherPage implements OnInit {

  other: Product[] = [];
 
  constructor(private otherService: OtherService, 
              private modalCtrl: ModalController, 
              
              private router: Router) { }
 
  ngOnInit() {
    this.other = this.otherService.getCart();
  }
 
  decreaseCartItem(product) {
    this.otherService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.otherService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.otherService.removeProduct(product);
  }
 
  getTotal() {
    return this.other.reduce((i, j) => i + j.price * j.qty, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }
 
}
