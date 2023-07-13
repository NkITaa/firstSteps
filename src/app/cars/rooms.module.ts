import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { CarsComponent } from './cars.component';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { FormsModule } from '@angular/forms';
import { RouteConfigToken } from '../services/route.config.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    CarsComponent,
    CarsTableComponent,
    AddRoomsComponent,
    RoomsBookingComponent,
    FilterPipe,
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: { title: 'Hotel' },
    },
  ],
})
export class RoomsModule {}
