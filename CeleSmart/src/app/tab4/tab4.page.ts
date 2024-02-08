import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { CarvingsService } from '../services/carvings.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  cForm: FormGroup;

  constructor(     private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private carvingsService: CarvingsService, ) 
    
    {
    this.cForm = this.formBuilder.group({
      imgurl:[''],
      name: [''],
      qty:[''],
      size: [''],
      price: [''],

    })
  }

  ngOnInit() { }


  onSubmit() {
    if (!this.cForm.valid) {
      return false;
    } else {
      this.carvingsService.createCarving(this.cForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.cForm.reset();
            this.router.navigate(['/tab4']);
          })
        });
    }
  }

  loadImage(imageUrl: string) {
    // You can implement logic to display the image preview here if needed.
  }

}

