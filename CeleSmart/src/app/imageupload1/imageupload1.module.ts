import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Imageupload1PageRoutingModule } from './imageupload1-routing.module';

import { Imageupload1Page } from './imageupload1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Imageupload1PageRoutingModule
  ],
  declarations: [Imageupload1Page]
})
export class Imageupload1PageModule {}
