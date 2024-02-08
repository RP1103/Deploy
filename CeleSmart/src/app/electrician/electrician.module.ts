import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricianPageRoutingModule } from './electrician-routing.module';

import { ElectricianPage } from './electrician.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricianPageRoutingModule
  ],
  declarations: [ElectricianPage]
})
export class ElectricianPageModule {}
