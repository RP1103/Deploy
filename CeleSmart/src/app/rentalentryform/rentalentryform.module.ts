import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentalentryformPageRoutingModule } from './rentalentryform-routing.module';

import { RentalentryformPage } from './rentalentryform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RentalentryformPageRoutingModule
  ],
  declarations: [RentalentryformPage]
})
export class RentalentryformPageModule {}
