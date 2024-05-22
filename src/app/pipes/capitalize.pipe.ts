import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    const oldString = value;
    return oldString.charAt(0).toUpperCase() + oldString.slice(1)
  }

}
