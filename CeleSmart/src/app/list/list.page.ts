import { Component, OnInit } from '@angular/core';
import { productCrudService } from './../service/product-crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  products: any = [];

  constructor( private productCrudService: productCrudService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.productCrudService.getproducts().subscribe((response) => {
      this.products = response;
    })
  }

  removeproduct(product, i) {
    if (window.confirm('Are you sure')) {
      this.productCrudService.deleteproduct(product._id)
      .subscribe(() => {
          this.products.splice(i, 1);
          console.log('product deleted!')
        }
      )
    }
  }

}
