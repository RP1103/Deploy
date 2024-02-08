import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesignsPageRoutingModule } from './designs-routing.module';

import { DesignsPage } from './designs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesignsPageRoutingModule
  ],
  declarations: [DesignsPage]
})
export class DesignsPageModule {}
