import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightViewPageRoutingModule } from './light-view-routing.module';

import { LightViewPage } from './light-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightViewPageRoutingModule
  ],
  declarations: [LightViewPage]
})
export class LightViewPageModule {}
