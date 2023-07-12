import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './route.config.service';
import { RouteConfig } from './routeConfig';

// new instance of the service will be created by multiple injections
@Injectable({
  providedIn: 'any',
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
    console.log(configToken);
  }
}
