import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    if (args.length === 3) {
      const day = args[0].toString().padStart(2, '0');
      const month = args[1].toString().padStart(2, '0');
      const year = args[2].toString().padStart(2, '0');

      return `${day}/${month}/${year}`;
    }
    return null;
  }
}
