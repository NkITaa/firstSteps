import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarsComponent } from './cars/cars.component';
import { CarsTableComponent } from './cars/cars-table/cars-table.component';
import { ContainerComponent } from './container/container.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [AppComponent, CarsComponent, CarsTableComponent, ContainerComponent, EmployeesComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
