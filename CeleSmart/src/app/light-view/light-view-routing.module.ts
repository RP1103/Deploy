import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightViewPage } from './light-view.page';

const routes: Routes = [
  {
    path: '',
    component: LightViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LightViewPageRoutingModule {}
