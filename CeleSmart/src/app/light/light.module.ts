import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LightPageRoutingModule } from './light-routing.module';

import { LightPage } from './light.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LightPageRoutingModule
  ],
  declarations: [LightPage]
})
export class LightPageModule {}
