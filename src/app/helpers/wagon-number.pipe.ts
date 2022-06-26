import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'WagonNumber',
})
export class WagonNumberPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    return (
      value.substr(0, 2) +
      ' ' +
      value.substr(2, 2) +
      ' ' +
      value.substr(4, 2) +
      '-' +
      value.substr(6, 2) +
      ' ' +
      value.substr(8, 3) +
      '-' +
      value.substr(11, 1)
    );
  }
}
