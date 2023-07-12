import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { CarsComponent } from './cars.component';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarsComponent,
    CarsTableComponent,
    AddRoomsComponent,
    RoomsBookingComponent,
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule],
})
export class RoomsModule {}
