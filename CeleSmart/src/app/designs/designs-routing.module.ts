import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignsPage } from './designs.page';

const routes: Routes = [
  {
    path: '',
    component: DesignsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignsPageRoutingModule {}
