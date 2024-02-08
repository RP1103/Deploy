import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EntryformService } from '../services/entryform.service';


@Component({
  selector: 'app-rentalentryform',
  templateUrl: './rentalentryform.page.html',
  styleUrls: ['./rentalentryform.page.scss'],
})
export class RentalentryformPage implements OnInit {
  entryform: any = [];
  countrycode:string="91";
  whatsappnumber:string="6383681954";
  url:string="https://wa.me/"+this.countrycode+this.
  whatsappnumber+"?text=hi";
  text=" Date:[''],"
      " :['rentalunitowner'],"
       " Date:[''],"
  

  constructor( private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private entryformService: EntryformService)
    {
      this.entryform = this.formBuilder.group({
        Date:[''],
        rentalunitowner:[''],
        rentalunitaddress:[''],
        tenantname:[''],
        tenantaddress:[''],
        tenantphone:[''],
        rent:[''],
        deposit:[''],
        contractstartdate:[''],
        contractperiod:[''],
        electricity:[''],
        water:[''],
        internet:[''],
        other:[''], 
        noticeperiod:[''],
        petspolicy:[''],
        checklist:['']
      
      });
    }

  ngOnInit() {
  }
  onSubmit() {
    if (!this.entryform.valid) {
      return false;
    } else {
      this.entryformService.creatEntryform(this.entryform.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.entryform.reset();
            this.router.navigate(['/']);
          });
        });
    }
  }



}
