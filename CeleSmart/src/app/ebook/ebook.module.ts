import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbookPageRoutingModule } from './ebook-routing.module';

import { EbookPage } from './ebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbookPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EbookPage]
})
export class EbookPageModule {}
