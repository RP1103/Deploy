import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarvingPage } from './carving.page';

const routes: Routes = [
  {
    path: '',
    component: CarvingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarvingPageRoutingModule {}
