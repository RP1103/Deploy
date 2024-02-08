import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricianPage } from './electrician.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricianPageRoutingModule {}
