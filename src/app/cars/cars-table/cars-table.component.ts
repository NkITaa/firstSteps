import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Room } from '../cars';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsTableComponent implements OnInit, OnChanges {
  @Input() rooms: Room[] | null = [];

  @Output() selectedRoom = new EventEmitter<Room>();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  selectRoom(room: Room) {
    this.selectedRoom.emit(room);
  }
}
