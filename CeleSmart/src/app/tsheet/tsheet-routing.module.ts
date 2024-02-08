import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsheetPage } from './tsheet.page';

const routes: Routes = [
  {
    path: '',
    component: TsheetPage,
    children: [
      {
        path: 'imageupload2',
        children: [
          {
            path: '',
            loadChildren: () => import('../imageupload2/imageupload2.module').then(m => m.Imageupload2PageModule)
          }
        ]
      },
      {
        path: 'sal',
        children: [
          {
            path: '',
            loadChildren: () => import('../sal/sal.module').then(m => m.SalPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'imageupload2',
        pathMatch: 'full'
      }
    ]
  },
  { 
    path: '',
    redirectTo: 'mypage/imageupload2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsheetPageRoutingModule {}
