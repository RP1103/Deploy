import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalPage } from './sal.page';

const routes: Routes = [
  {
    path: '',
    component: SalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalPageRoutingModule {}
