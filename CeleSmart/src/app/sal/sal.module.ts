import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalPageRoutingModule } from './sal-routing.module';

import { SalPage } from './sal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalPageRoutingModule
  ],
  declarations: [SalPage]
})
export class SalPageModule {}
