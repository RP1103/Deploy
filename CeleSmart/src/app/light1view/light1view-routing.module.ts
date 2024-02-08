import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Light1viewPage } from './light1view.page';

const routes: Routes = [
  {
    path: '',
    component: Light1viewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Light1viewPageRoutingModule {}
