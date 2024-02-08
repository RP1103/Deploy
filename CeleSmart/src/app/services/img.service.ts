import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ImgService {
  constructor( private http: HttpClient) {}


  async uploadImage(imageData: string): Promise<any> {
    const apiUrl = 'http://localhost:3000/upload';

    try {
      const response = await this.http.post(apiUrl, { image: imageData }).toPromise();
      console.log('Image uploaded successfully:', response);
      return response;
    } catch (error) {
      if (error.status >= 200 && error.status < 300) {
        // Handle successful response with non-2xx status (if needed)
        console.log('Image uploaded successfully:', error);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error; // Re-throw the error to be handled in the calling code if needed
    }
  }
}