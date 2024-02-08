import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalUpdatePage } from './rental-update.page';

const routes: Routes = [
  {
    path: '',
    component: RentalUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalUpdatePageRoutingModule {}
