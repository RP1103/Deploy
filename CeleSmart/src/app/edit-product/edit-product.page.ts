import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

    productId: string;
    product: any = {};
  router: any;
  
    constructor(
      private route: ActivatedRoute,
      private imageService: ImageService
    ) { }
  
    ngOnInit() {
      const productName = this.route.snapshot.paramMap.get('name');
      if (productName) {
        // Fetch product details by name
        this.imageService.getProductByName(productName).subscribe(
          (product) => {
            this.product = product;
            console.log('Fetched product details:', this.product);
          },
          (error) => {
            console.error('Error fetching product details:', error);
            // Handle error accordingly
          }
        );
      }
    }

  }