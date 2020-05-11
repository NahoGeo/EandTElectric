import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WireAndConduitPageRoutingModule } from './wire-and-conduit-routing.module';

import { WireAndConduitPage } from './wire-and-conduit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WireAndConduitPageRoutingModule
  ],
  declarations: [WireAndConduitPage]
})
export class WireAndConduitPageModule {}
