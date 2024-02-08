import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcarvingPage } from './newcarving.page';

const routes: Routes = [
  {
    path: '',
    component: NewcarvingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcarvingPageRoutingModule {}
