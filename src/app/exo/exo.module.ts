import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { SharedModule } from '../shared/shared.module';
import { Exo01Component } from './exo01/exo01.component';


@NgModule({
  declarations: [
    ExoComponent,
    Exo01Component
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
