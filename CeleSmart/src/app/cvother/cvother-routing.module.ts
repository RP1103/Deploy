import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvotherPage } from './cvother.page';

const routes: Routes = [
  {
    path: '',
    component: CvotherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvotherPageRoutingModule {}
