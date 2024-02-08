import { PastaService } from '../_services/pasta.service';
import { Product } from '../models/other.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  pasta: Product[] = [];
 
  constructor(private pastaService: PastaService, 
              private modalCtrl: ModalController, 
              
              private router: Router) { }
 
  ngOnInit() {
    this.pasta = this.pastaService.getCart();
  }
 
  decreaseCartItem(product) {
    this.pastaService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.pastaService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.pastaService.removeProduct(product);
  }
 
  getTotal() {
    return this.pasta.reduce((i, j) => i + j.price * j.qty, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }
 
}
