import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CviewPageRoutingModule } from './cview-routing.module';

import { CviewPage } from './cview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CviewPageRoutingModule
  ],
  declarations: [CviewPage]
})
export class CviewPageModule {}
