import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'customerlist',
        children: [
          {
            path: '',
            loadChildren: () => import('../customerlist/customerlist.module').then(m => m.CustomerlistPageModule)
          }
        ]
      },
      {
        path: 'transaction',
        children: [
          {
            path: '',
            loadChildren: () => import('../transaction/transaction.module').then(m => m.TransactionPageModule)
          }
        ]
      },
      // {
      //   path: 'commission',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../commission/commission.module').then(m => m.CommissionPageModule)
      //     }
      //   ]
      // },
      {
        path: 'exp',
        children: [
          {
            path: '',
            loadChildren: () => import('../exp/exp.module').then(m => m.ExpPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'customerlist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'mypage/customerlist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
