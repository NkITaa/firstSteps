import { Component, OnInit } from '@angular/core';
import { Car } from './cars';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  selectedCar!: Car;

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.cars = this.carsService.getCars();
  }

  currentCar(car: Car) {
    this.selectedCar = car;
  }

  addCar() {
    const car: Car = { brand: 'Audi', model: 'RS6' };
    this.cars = [...this.cars, car];
  }
}
