import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { CarsComponent } from './cars/cars.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: 'employee', component: EmployeesComponent },
  { path: 'rooms', component: CarsComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
