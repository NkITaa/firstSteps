import { Inject, Injectable } from '@angular/core';
import { Car } from '../cars';
import { APP_SERVICE_CONFIG } from '../../app_config/appconfig.service';
import { AppConfig } from '../../app_config/appconfig.interface';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  cars: Car[] = [
    { brand: 'Porsche', model: '991' },

    { brand: 'Porsche', model: '991' },
  ];

  getCars() {
    return this.cars;
  }

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(config.apiEndpoint);
  }
}
