import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
    children: [
      {
        path: 'allorders',
        children: [
          {
            path: '',
            loadChildren: () => import('../allorders/allorders.module').then(m => m.AllordersPageModule)
          }
        ]
      },
      {
        path: 'ordercomplete',
        children: [
          {
            path: '',
            loadChildren: () => import('../ordercomplete/ordercomplete.module').then(m => m.OrdercompletePageModule)
          }
        ]
      },
      {
        path: 'image-upload',
        children: [
          {
            path: '',
            loadChildren: () => import('../image-upload/image-upload.module').then(m => m.ImageUploadPageModule)
          }
        ]
      },
      {
        path: 'img',
        children: [
          {
            path: '',
            loadChildren: () => import('../img/img.module').then(m => m.ImgPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'allorders',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'mypage/allorders',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
