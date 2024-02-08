import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-imageupload1',
  templateUrl: 'imageupload1.page.html',
  styleUrls: ['imageupload1.page.scss'],
})
export class Imageupload1Page {
  uploadError: any;
  selectedFile: File;

  constructor(private imageService: ImageService) {}


}
