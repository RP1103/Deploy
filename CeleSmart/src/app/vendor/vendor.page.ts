import { Component, OnInit, ViewChild,ElementRef,NgZone} from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
// import { CarvingsService } from '../services/carvings.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarvingService } from '../_services/carving.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {
  cForm: FormGroup;
  carvings: any = [];
  products = [];

  constructor(     private router: Router,public formBuilder: FormBuilder,private zone: NgZone,
    // private carvingsService: CarvingsService,
    private carvingService: CarvingService, ) 
    
    {
    this.cForm = this.formBuilder.group({
      imgurl:[''],
      name: [''],
      qty:[''],
      size: [''],
      price: [''],

    })
  }

  ngOnInit(){
    // this.products = this.carvingService.getProducts();
    this.carvings = this.carvingService.getCart();
    

  }


  // onSubmit() {
  //   if (!this.cForm.valid) {
  //     return false;
  //   } else {
  //     this.carvingsService.createCarving(this.cForm.value)
  //       .subscribe((response) => {
  //         this.zone.run(() => {
  //           this.cForm.reset();
  //           this.router.navigate(['/tab4']);
  //         })
  //       });
  //   }
  // }

  // ionViewDidEnter() {
  //   this.carvingsService.getCarvings().subscribe((response) => {
  //     this.carvings = response;
  //   })
  // }

}

