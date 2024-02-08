import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Imageupload2PageRoutingModule } from './imageupload2-routing.module';

import { Imageupload2Page } from './imageupload2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Imageupload2PageRoutingModule
  ],
  declarations: [Imageupload2Page]
})
export class Imageupload2PageModule {}
