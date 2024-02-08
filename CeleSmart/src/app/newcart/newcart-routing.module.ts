import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcartPage } from './newcart.page';

const routes: Routes = [
  {
    path: '',
    component: NewcartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcartPageRoutingModule {}
