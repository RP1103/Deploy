import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbookPage } from './ebook.page';

const routes: Routes = [
  {
    path: '',
    component: EbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbookPageRoutingModule {}
