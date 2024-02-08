import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsAddedPage } from './products-added.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsAddedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsAddedPageRoutingModule {}
