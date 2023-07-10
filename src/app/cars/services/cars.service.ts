import { Injectable } from '@angular/core';
import { Car } from '../cars';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  cars: Car[] = [
    { brand: 'Porsche', model: '991' },

    { brand: 'Porsche', model: '991' },
  ];

  getCars() {
    return this.cars;
  }

  constructor() {}
}
