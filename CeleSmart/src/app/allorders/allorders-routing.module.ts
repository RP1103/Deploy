import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllordersPage } from './allorders.page';

const routes: Routes = [
  {
    path: '',
    component: AllordersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllordersPageRoutingModule {}
