import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { SharedModule } from '../shared/shared.module';
import { Exo01Component } from './exo01/exo01.component';
import { Exo02Component } from './exo02/exo02.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExoComponent,
    Exo01Component,
    Exo02Component
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExoModule { }
