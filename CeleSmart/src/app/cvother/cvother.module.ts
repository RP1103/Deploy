import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvotherPageRoutingModule } from './cvother-routing.module';

import { CvotherPage } from './cvother.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvotherPageRoutingModule
  ],
  declarations: [CvotherPage]
})
export class CvotherPageModule {}
