import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo01Component } from './demo01/demo01.component';
import { FormsModule } from '@angular/forms';
import { Demo02Component } from './demo02/demo02.component';
import { SharedModule } from '../shared/shared.module';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DemoModule { }
