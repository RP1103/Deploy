import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Imageupload1Page } from './imageupload1.page';

const routes: Routes = [

  {
    path: '',
    component: Imageupload1Page,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'light',
        children: [
          {
            path: '',
            loadChildren: () => import('../light/light.module').then(m => m.LightPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: '/mypage/tab1',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Imageupload1PageRoutingModule {}
