import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransformerPageRoutingModule } from './transformer-routing.module';

import { TransformerPage } from './transformer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransformerPageRoutingModule
  ],
  declarations: [TransformerPage]
})
export class TransformerPageModule {}
