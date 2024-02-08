import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerlistPageRoutingModule } from './customerlist-routing.module';

import { CustomerlistPage } from './customerlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerlistPageRoutingModule
  ],
  declarations: [CustomerlistPage]
})
export class CustomerlistPageModule {}
