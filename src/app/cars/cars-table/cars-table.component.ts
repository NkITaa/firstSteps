import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../cars';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss'],
})
export class CarsTableComponent implements OnInit {
  @Input() cars: Car[] = [];

  ngOnInit(): void {}
}
