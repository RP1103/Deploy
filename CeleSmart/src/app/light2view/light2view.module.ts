import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Light2viewPageRoutingModule } from './light2view-routing.module';

import { Light2viewPage } from './light2view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Light2viewPageRoutingModule
  ],
  declarations: [Light2viewPage]
})
export class Light2viewPageModule {}
