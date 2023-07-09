import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../cars';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss'],
})
export class CarsTableComponent implements OnInit {
  @Input() cars: Car[] = [];

  @Output() selectedCar = new EventEmitter<Car>();

  ngOnInit(): void {}

  selectCar(car: Car) {
    this.selectedCar.emit(car);
  }
}
