import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingHistoryRoutingModule } from './booking-history-routing.module';
import { BookingHistoryComponent } from './booking-history.component';


@NgModule({
  declarations: [
    BookingHistoryComponent
  ],
  imports: [
    CommonModule,
    BookingHistoryRoutingModule
  ]
})
export class BookingHistoryModule { }
