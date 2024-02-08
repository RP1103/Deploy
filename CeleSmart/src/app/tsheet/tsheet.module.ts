import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsheetPageRoutingModule } from './tsheet-routing.module';

import { TsheetPage } from './tsheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsheetPageRoutingModule
  ],
  declarations: [TsheetPage]
})
export class TsheetPageModule {}
