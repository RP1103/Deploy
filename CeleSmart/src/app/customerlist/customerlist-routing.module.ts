import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerlistPage } from './customerlist.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerlistPageRoutingModule {}
