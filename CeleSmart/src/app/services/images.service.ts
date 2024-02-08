 // image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private baseUrl = 'http://localhost:3000/api/images'; // Update with your server URL

  constructor(private http: HttpClient) {}

  async getAllImages(): Promise<Image[]> {
    try {
      return this.http.get<Image[]>(`${this.baseUrl}`).toPromise();
    } catch (error) {
      console.error('Error fetching all images:', error);
      throw error;
    }
  }

  async getImageUrlById(imageId: string): Promise<string> {
    return `${this.baseUrl}/${imageId}`;
  }
}

export interface Image {
  id: string;
  contentType: string;
  data: string;
}
