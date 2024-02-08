import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdercompletePageRoutingModule } from './ordercomplete-routing.module';

import { OrdercompletePage } from './ordercomplete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdercompletePageRoutingModule
  ],
  declarations: [OrdercompletePage]
})
export class OrdercompletePageModule {}
