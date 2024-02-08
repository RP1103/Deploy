import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Light2viewPage } from './light2view.page';

const routes: Routes = [
  {
    path: '',
    component: Light2viewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Light2viewPageRoutingModule {}
