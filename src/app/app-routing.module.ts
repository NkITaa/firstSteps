import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { CarsComponent } from './cars/cars.component';
import { ContainerComponent } from './container/container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomsBookingComponent } from './cars/rooms-booking/rooms-booking.component';
import { AddRoomsComponent } from './cars/add-rooms/add-rooms.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'employee', component: EmployeesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rooms', component: CarsComponent },
  { path: 'rooms/add', component: AddRoomsComponent },
  { path: 'rooms/:id', component: RoomsBookingComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
