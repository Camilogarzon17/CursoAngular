import { Pipe, PipeTransform } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Pipe({
  name: 'altercharfornumber'
})
export class AltercharfornumberPipe implements PipeTransform {

  transform(value: string ): string {
    let newvalue =
      value.replace(/a/gi, '@')
      .replace(/e/gi, '3')
      .replace(/i/gi, '1')
      .replace(/o/gi, '0')
      .replace(/u/gi, '1-1')
      .replace(/f/gi, '7')
      .replace(/s/gi, '5');
    return newvalue;
  }

}
