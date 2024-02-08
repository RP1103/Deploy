import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Light2Page } from './light2.page';

const routes: Routes = [
  {
    path: '',
    component: Light2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Light2PageRoutingModule {}
