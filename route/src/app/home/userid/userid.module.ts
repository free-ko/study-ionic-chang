import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UseridPageRoutingModule } from './userid-routing.module';

import { UseridPage } from './userid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UseridPageRoutingModule
  ],
  declarations: [UseridPage]
})
export class UseridPageModule {}
