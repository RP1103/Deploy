import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcartPageRoutingModule } from './newcart-routing.module';

import { NewcartPage } from './newcart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcartPageRoutingModule
  ],
  declarations: [NewcartPage]
})
export class NewcartPageModule {}
