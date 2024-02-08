import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-img',
  templateUrl: 'img.page.html',
  styleUrls: ['img.page.scss'],
})
export class ImgPage {
  uploadError: any;
  selectedFile: File;
  formData: any = {
    name: '',
    price: '',
    qty: '',
    size: '',
  };

  constructor(private imageService: ImageService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async uploadSelectedImage() {
    try {
      if (!this.selectedFile) {
        console.error('No file selected for upload');
        return;
      }

      // Convert selected file to base64
      const base64Image = await this.convertFileToBase64(this.selectedFile);

      // Upload base64-encoded image and additional data
      await this.imageService.uploadImage({
        image: base64Image,
        name: this.formData.name,
        price: this.formData.price,
        qty: this.formData.qty,
        size: this.formData.size,
      });

      console.log('Image uploaded successfully');
      this.uploadError = null;
    } catch (error) {
      console.error('Error uploading image:', error);
      this.uploadError = error;
    }
  }

  private convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        resolve(base64String.split(',')[1]); // Extract only the base64 data
      };
      reader.onerror = () => {
        reject(new Error('Error reading file'));
      };
      reader.readAsDataURL(file);
    });
  }
}
