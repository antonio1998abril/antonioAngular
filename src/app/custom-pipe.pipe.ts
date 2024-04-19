import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCapitalizePipe'
})
export class CustomCapitalizePipe implements PipeTransform {

  transform(value:string | undefined): string {
    return value?.replace(/\w\S*/g, (c) => c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || '';
  }

}
