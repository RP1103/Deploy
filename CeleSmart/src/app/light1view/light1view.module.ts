import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Light1viewPageRoutingModule } from './light1view-routing.module';

import { Light1viewPage } from './light1view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Light1viewPageRoutingModule
  ],
  declarations: [Light1viewPage]
})
export class Light1viewPageModule {}
