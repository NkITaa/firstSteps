import { Pipe, PipeTransform } from '@angular/core';
import { Room } from './cars';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(rooms: Room[] | null, price: number): Room[] | undefined {
    return rooms?.filter((room) => room.price <= price);
  }
}
