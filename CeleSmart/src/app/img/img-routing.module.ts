import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgPage } from './img.page';

const routes: Routes = [
  {
    path: '',
    component: ImgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgPageRoutingModule {}
