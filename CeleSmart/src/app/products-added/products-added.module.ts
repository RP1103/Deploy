import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsAddedPageRoutingModule } from './products-added-routing.module';

import { ProductsAddedPage } from './products-added.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsAddedPageRoutingModule
  ],
  declarations: [ProductsAddedPage]
})
export class ProductsAddedPageModule {}
