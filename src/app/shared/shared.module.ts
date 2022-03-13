import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from '../pipes/to-fahrenheit.pipe';
import { ConvertSecondPipe } from '../pipes/convert-second.pipe';
import { DemoPipe } from '../pipes/demo.pipe';
import { NumbersPipe } from '../pipes/numbers.pipe';

@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertSecondPipe,
    DemoPipe,
    NumbersPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToFahrenheitPipe,
    ConvertSecondPipe,
    DemoPipe,
    NumbersPipe
  ]
})
export class SharedModule { }
