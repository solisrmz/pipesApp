import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, estado: boolean = true): string {
    return (estado) ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
  }

}
