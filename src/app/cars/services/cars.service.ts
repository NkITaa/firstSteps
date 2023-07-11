import { Inject, Injectable } from '@angular/core';
import { Room } from '../cars';
import { APP_SERVICE_CONFIG } from '../../app_config/appconfig.service';
import { AppConfig } from '../../app_config/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  rooms: Room[] = [];

  headers = new HttpHeaders({ token: 'blalalala' });

  // this is better as get Rooms method, because data gets cashed and unecessary requests are not made
  getRooms$ = this.http
    .get<Room[]>('api/rooms', { headers: this.headers })
    .pipe(shareReplay(1));

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

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,

    // getting the HTTP client, because injected it in app.component
    private http: HttpClient
  ) {
    console.log(config.apiEndpoint);
  }
}
