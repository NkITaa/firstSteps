import { Inject, Injectable } from '@angular/core';
import { Room } from '../cars';
import { APP_SERVICE_CONFIG } from '../../app_config/appconfig.service';
import { AppConfig } from '../../app_config/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  rooms: Room[] = [];

  getRooms() {
    // can do this because of the proxy config in the angular.json file
    return this.http.get<Room[]>('api/rooms');
  }
  addRoom(room: Room) {
    return this.http.post<Room[]>('api/rooms', room);
  }

  editRoom(room: Room) {
    return this.http.put<Room[]>(`api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<Room[]>(`api/rooms/${id}`);
  }

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,

    // getting the HTTP client, because injected it in app.component
    private http: HttpClient
  ) {
    console.log(config.apiEndpoint);
  }
}
