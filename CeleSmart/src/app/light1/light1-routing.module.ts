import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Light1Page } from './light1.page';

const routes: Routes = [
  {
    path: '',
    component: Light1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Light1PageRoutingModule {}
