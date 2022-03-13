import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(value: number): string {

    let minutes : number = Math.floor(value / 60)
    let seconds : number = value % 60

    return `${(minutes < 10 ? '0' : '') + minutes} minute${(minutes < 2 ? '' : 's')} et ${(seconds < 10 ? '0' : '') + seconds} second${(seconds < 2 ? '' : 's')}`

    

  }

}
