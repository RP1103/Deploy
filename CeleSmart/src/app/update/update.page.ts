import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { productCrudService } from './../service/product-crud.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateproductFg: FormGroup;
  id: any;

  constructor(
    private productCrudService: productCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchproduct(this.id);
    this.updateproductFg = this.formBuilder.group({
      name: [''],
      imagePath: [''],
      kgs: [''],
      price: ['']
    })
  }

  fetchproduct(id) {
    this.productCrudService.getproduct(id).subscribe((data) => {
      this.updateproductFg.setValue({
        name: data['name'],
        imgurl:data ['imgurl'],
        kgs: data['kgs'],
        price: data ['price']
      });
    });
  }

  onSubmit() {
    if (!this.updateproductFg.valid) {
      return false;
    } else {
      this.productCrudService.updateproduct(this.id, this.updateproductFg.value)
        .subscribe(() => {
          this.updateproductFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }

}
 