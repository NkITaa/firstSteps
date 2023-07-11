import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarsComponent } from './cars/cars.component';
import { CarsTableComponent } from './cars/cars-table/cars-table.component';
import { ContainerComponent } from './container/container.component';
import { EmployeesComponent } from './employees/employees.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './app_config/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsTableComponent,
    ContainerComponent,
    EmployeesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, BrowserAnimationsModule],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
