import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalentryformPage } from './rentalentryform.page';

const routes: Routes = [
  {
    path: '',
    component: RentalentryformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalentryformPageRoutingModule {}
