import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prioTrans',
})
export class PrioTransPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'High';
      case 2:
        return 'Medium';
      case 3:
        return 'Low';
    }
    return 'Low';
  }
}
