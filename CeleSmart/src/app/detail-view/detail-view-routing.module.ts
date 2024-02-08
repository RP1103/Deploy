import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailViewPage } from './detail-view.page';

const routes: Routes = [
  {
    path: '',
    component: DetailViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailViewPageRoutingModule {}
