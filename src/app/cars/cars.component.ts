import { Component, OnInit } from '@angular/core';
import { Room } from './cars';
import { CarsService } from './services/cars.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  rooms: Room[] = [];

  selectedRoom!: Room;

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete();
  });

  constructor(private roomService: CarsService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });
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
}
