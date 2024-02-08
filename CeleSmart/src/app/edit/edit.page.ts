import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ImageService } from '../services/image.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss'],
})
export class EditPage implements OnInit {
  products: any[] = [];
  errorMessage: string = '';
  editedProduct: any = null; // Property for the currently edited product

  constructor(
    private router: Router,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.imageService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data;
        console.log('Fetched products:', this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  updateProduct(product: any): void {
    const productId = product._id;
  
    if (!productId) {
      console.error('Product ID is undefined');
      this.errorMessage = 'Failed to update product. Please try again.';
      return;
    }
  
    const updatedProductData = {
      name: product.name,
      price: product.price,
      qty: product.qty,
      size: product.size,
      image: product.image
    };
  
    // Log size of the request data for debugging
    const dataSize = JSON.stringify(updatedProductData).length;
    console.log(`Request Data Size: ${dataSize} bytes`);
  
    this.imageService.updateProduct(productId, updatedProductData).subscribe(
      () => {
        console.log('Product updated successfully');
        this.fetchProducts(); // Fetch updated products again if needed
      },
      (error) => {
        console.error('Error updating product:', error);
        this.errorMessage = 'Failed to update product. Please try again.';
      }
    );
  }
  

  editItem(product: any): void {
    console.log('Editing product:', product);
    product.isEditing = !product.isEditing;
    this.editedProduct = product; // Set the edited product
  }

//   deleteItem(productId: string): void {
//     this.imageService.deleteProduct(productId).subscribe(
//         () => {
//             console.log('Product deleted successfully');
//             // Refresh the product list or take other actions
//         },
//         (error) => {
//             console.error('Error deleting product:', error);
//         }
//     );
// }





  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Image = reader.result?.toString().split(',')[1]; // Extract base64 image string
        this.editedProduct.image = base64Image; // Update the edited product image with the base64 string
      };
    }
  }

  getImageSource(imageData: any): string {
    if (imageData && imageData.data && imageData.contentType) {
      const base64Image = btoa(String.fromCharCode(...new Uint8Array(imageData.data.data)));
      return 'data:' + imageData.contentType + ';base64,' + base64Image;
    } else {
      return '';
    }
  }
}
