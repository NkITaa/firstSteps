import { Component, OnInit } from '@angular/core';
import { Car } from './cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  selectedCar!: Car;

  ngOnInit(): void {
    this.cars = [
      { brand: 'Porsche', model: '991' },

      { brand: 'Porsche', model: '991' },
    ];
  }

  currentCar(car: Car) {
    this.selectedCar = car;
  }

  addCar() {
    const car: Car = { brand: 'Audi', model: 'RS6' };
    this.cars = [...this.cars, car];
  }
}
