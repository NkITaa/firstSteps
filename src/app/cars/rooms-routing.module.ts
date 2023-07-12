import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';

const routes: Routes = [
  {
    // path is blank because it is default in path in app-routing
    path: '',
    component: CarsComponent,
    children: [
      { path: 'add', component: AddRoomsComponent },
      { path: ':id', component: RoomsBookingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
