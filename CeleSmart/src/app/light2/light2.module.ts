import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Light2PageRoutingModule } from './light2-routing.module';

import { Light2Page } from './light2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Light2PageRoutingModule
  ],
  declarations: [Light2Page]
})
export class Light2PageModule {}
