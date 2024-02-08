import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentalUpdatePageRoutingModule } from './rental-update-routing.module';

import { RentalUpdatePage } from './rental-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentalUpdatePageRoutingModule
  ],
  declarations: [RentalUpdatePage]
})
export class RentalUpdatePageModule {}
