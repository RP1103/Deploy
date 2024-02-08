import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CarvingPage } from './carving/carving.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'cartview',
    loadChildren: () => import('./cartview/cartview.module').then( m => m.CartviewPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },

  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'view1',
    loadChildren: () => import('./view1/view1.module').then( m => m.View1PageModule)
  },
  {
    path: 'base',
    loadChildren: () => import('./base/base.module').then( m => m.BasePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },{
    path: 'update/:id',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'light',
    loadChildren: () => import('./light/light.module').then( m => m.LightPageModule)
  },
  {
    path: 'light-view',
    loadChildren: () => import('./light-view/light-view.module').then( m => m.LightViewPageModule)
  },
  {
    path: 'cvother',
    loadChildren: () => import('./cvother/cvother.module').then( m => m.CvotherPageModule)
  },
  {
    path: 'carving',
    loadChildren: () => import('./carving/carving.module').then( m => m.CarvingPageModule)
  },
  {
    path: 'cview',
    loadChildren: () => import('./cview/cview.module').then( m => m.CviewPageModule)
  },   {
    path: 'light1',
    loadChildren: () => import('./light1/light1.module').then( m => m.Light1PageModule)
  },
  {
    path: 'light2',
    loadChildren: () => import('./light2/light2.module').then( m => m.Light2PageModule)
  },
  {
    path: 'electrician',
    loadChildren: () => import('./electrician/electrician.module').then( m => m.ElectricianPageModule)
  },
  {
    path: 'light1view',
    loadChildren: () => import('./light1view/light1view.module').then( m => m.Light1viewPageModule)
  },
  {
    path: 'light2view',
    loadChildren: () => import('./light2view/light2view.module').then( m => m.Light2viewPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ebook',
    loadChildren: () => import('./ebook/ebook.module').then( m => m.EbookPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'rentalentryform',
    loadChildren: () => import('./rentalentryform/rentalentryform.module').then( m => m.RentalentryformPageModule)
  },
  {
    path: 'rental-update',
    loadChildren: () => import('./rental-update/rental-update.module').then( m => m.RentalUpdatePageModule)
  },
  {
    path: 'detail-view',
    loadChildren: () => import('./detail-view/detail-view.module').then( m => m.DetailViewPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'vendor',
    loadChildren: () => import('./vendor/vendor.module').then( m => m.VendorPageModule)
  },

  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'designs',
    loadChildren: () => import('./designs/designs.module').then( m => m.DesignsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'customerlist',
    loadChildren: () => import('./customerlist/customerlist.module').then( m => m.CustomerlistPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'commission',
    loadChildren: () => import('./commission/commission.module').then( m => m.CommissionPageModule)
  },

  {
    path: 'image-upload',
    loadChildren: () => import('./image-upload/image-upload.module').then( m => m.ImageUploadPageModule)
  },
   
  {
    path: 'newcart',
    loadChildren: () => import('./newcart/newcart.module').then( m => m.NewcartPageModule)
  },
  {
    path: 'carving',
    component: CarvingPage
  }, 
  
  {
    path: 'check',
    loadChildren: () => import('./check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'products-added',
    loadChildren: () => import('./products-added/products-added.module').then( m => m.ProductsAddedPageModule)
  },
  {
    path: 'allorders',
    loadChildren: () => import('./allorders/allorders.module').then( m => m.AllordersPageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./expenses/expenses.module').then( m => m.ExpensesPageModule)
  },
  {
    path: 'exp',
    loadChildren: () => import('./exp/exp.module').then( m => m.ExpPageModule)
  },
  {
    path: 'imageupload1',
    loadChildren: () => import('./imageupload1/imageupload1.module').then( m => m.Imageupload1PageModule)
  },
  {
    path: 'img',
    loadChildren: () => import('./img/img.module').then( m => m.ImgPageModule)
  },
  {
    path: 'imageupload2',
    loadChildren: () => import('./imageupload2/imageupload2.module').then( m => m.Imageupload2PageModule)
  },
  {
    path: 'newcarving',
    loadChildren: () => import('./newcarving/newcarving.module').then( m => m.NewcarvingPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'delivery',
    loadChildren: () => import('./delivery/delivery.module').then( m => m.DeliveryPageModule)
  },
  {
    path: 'ordercomplete',
    loadChildren: () => import('./ordercomplete/ordercomplete.module').then( m => m.OrdercompletePageModule)
  },
  {
    path: 'edit-product/:name',
    loadChildren: () => import('./edit-product/edit-product.module').then(m => m.EditProductPageModule)
  },
  {
    path: 'ordertracking',
    loadChildren: () => import('./ordertracking/ordertracking.module').then( m => m.OrdertrackingPageModule)
  },  {
    path: 'sal',
    loadChildren: () => import('./sal/sal.module').then( m => m.SalPageModule)
  },
  {
    path: 'tsheet',
    loadChildren: () => import('./tsheet/tsheet.module').then( m => m.TsheetPageModule)
  },



   
   




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 