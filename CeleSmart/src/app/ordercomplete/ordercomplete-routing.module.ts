import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdercompletePage } from './ordercomplete.page';

const routes: Routes = [
  {
    path: '',
    component: OrdercompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdercompletePageRoutingModule {}
