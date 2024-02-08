import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Imageupload2Page } from './imageupload2.page';

const routes: Routes = [
  {
    path: '',
    component: Imageupload2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Imageupload2PageRoutingModule {}
