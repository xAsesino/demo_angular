import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { ConvertSecondPipe } from '../pipes/convert-second.pipe';

@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertSecondPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFahrenheitPipe,
    ConvertSecondPipe
  ]
})
export class SharedModule { }
