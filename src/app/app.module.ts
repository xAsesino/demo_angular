import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { Demo01RoutingModule } from './demo/demo01/demo01-routing.module';
import { ExoRoutingModule } from './exo/exo-routing.module';
import { NavComponent } from './nav/nav.component';
import { ConvertSecondPipe } from './pipes/convert-second.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExoRoutingModule,
    DemoRoutingModule,
    Demo01RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
