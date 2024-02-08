import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarvingPageRoutingModule } from './carving-routing.module';

import { CarvingPage } from './carving.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarvingPageRoutingModule
  ],
  declarations: [CarvingPage]
})
export class CarvingPageModule {}
