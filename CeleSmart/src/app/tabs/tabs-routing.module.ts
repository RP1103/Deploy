import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'imageupload1',
        loadChildren: () => import('../imageupload1/imageupload1.module').then(m => m.Imageupload1PageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      }, 
      {
        path :'light',
        loadChildren: () => import('../light/light.module').then(m => m.LightPageModule)
      },
      {
        path :'newcarving',
        loadChildren: () => import('../newcarving/newcarving.module').then(m => m.NewcarvingPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminPageModule)
      },
      {
        path: 'tsheet',
        loadChildren: () => import('../tsheet/tsheet.module').then(m => m.TsheetPageModule)
      },
    
    
      {
        path: '',
        redirectTo: '/tabs/imageupload1/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/imageupload1/tab1',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/imageupload2/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
