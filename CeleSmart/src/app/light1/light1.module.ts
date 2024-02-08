import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Light1PageRoutingModule } from './light1-routing.module';

import { Light1Page } from './light1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Light1PageRoutingModule
  ],
  declarations: [Light1Page]
})
export class Light1PageModule {}
