import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { productCrudService } from './../service/product-crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  productForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private productCrudService: productCrudService    
  ) {
    this.productForm = this.formBuilder.group({
      name: [''],
      imgurl: [''],
      kgs: [''],
      price: ['']
     
    })
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.productForm.valid) {
      return false;
    } else {
      this.productCrudService.createproduct(this.productForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.productForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}
