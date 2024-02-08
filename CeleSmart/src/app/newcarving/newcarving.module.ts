import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcarvingPageRoutingModule } from './newcarving-routing.module';

import { NewcarvingPage } from './newcarving.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcarvingPageRoutingModule
  ],
  declarations: [NewcarvingPage]
})
export class NewcarvingPageModule {}
