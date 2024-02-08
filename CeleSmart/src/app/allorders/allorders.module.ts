import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllordersPageRoutingModule } from './allorders-routing.module';

import { AllordersPage } from './allorders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllordersPageRoutingModule
  ],
  declarations: [AllordersPage]
})
export class AllordersPageModule {}
