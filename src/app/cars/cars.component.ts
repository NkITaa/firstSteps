import { Component, OnInit } from '@angular/core';
import { Room } from './cars';
import { CarsService } from './services/cars.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  rooms: Room[] = [];

  selectedRoom!: Room;

  totalBytes = 0;

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete();
  });

  /*   subscription!: Subscription; */

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      console.log(err);
      this.error$.next(err);
      return of([]);
    })
  );

  roomsCount$ = this.roomService.getRooms$.pipe(map((rooms) => rooms.length));

  constructor(
    private roomService: CarsService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    /*     this.subscription = this.roomService.getRooms$.subscribe((rooms) => {
      this.rooms = rooms;
    }); */

    this.roomService.getRooms().subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: () => console.log('error'),
    });

    this.stream.subscribe((data) => {
      console.log(data);
    });
  }

  currentRoom(room: Room) {
    this.selectedRoom = room;
  }

  editRoom() {
    const room: Room = {
      roomNumber: '3',
      roomType: 'Medium',
      amenities: 'bib',
      price: 500,
      photos: 'ups',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.6,
    };
    this.roomService.editRoom(room).subscribe((data) => {
      this.rooms = data;
    });
  }

  addRoom() {
    const room: Room = {
      roomNumber: '7',
      roomType: 'Medium',
      amenities: 'Bla',
      price: 500,
      photos: 'ups',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.6,
    };
    this.roomService.addRoom(room).subscribe((data) => {
      this.rooms = data;
    });
  }

  deleteRoom() {
    this.roomService.deleteRoom('3').subscribe((data) => {
      this.rooms = data;
    });
  }

  getPhotos() {
    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('We have a header');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
  }

  // when component gets destroyed destroy subscription
  /*   ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  } */
}
