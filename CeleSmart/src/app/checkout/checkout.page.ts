import { Component, OnInit, NgZone } from '@angular/core';

  import { Router } from '@angular/router';
  import { FormGroup, FormBuilder } from '@angular/forms';
  import { CheckoutService } from './../services/checkout.service';

  @Component({
    selector: 'app-create',
    templateUrl: './checkout.page.html',
    styleUrls: ['./checkout.page.scss'],
  })

  export class CheckoutPage implements OnInit {

    checkoutForm: FormGroup;

    constructor(
      private router: Router,
      public formBuilder: FormBuilder,
      private zone: NgZone,
      private checkoutService: CheckoutService
    ) {
      this.checkoutForm = this.formBuilder.group({
        name: [''],
        city: [''],
        mno: ['']


      });
    }

    ngOnInit() { }

    onSubmit() {
      if (!this.checkoutForm.valid) {
        return false;
      } else {
        this.checkoutService.createCheckout(this.checkoutForm.value)
          .subscribe((response) => {
            this.zone.run(() => {
              this.checkoutForm.reset();
              this.router.navigate(['']);
            });
          });
      }
    }

  }
