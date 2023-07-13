import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingHistoryRoutingModule } from './booking-history-routing.module';
import { BookingHistoryComponent } from './booking-history.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [BookingHistoryComponent],
  imports: [
    CommonModule,
    BookingHistoryRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatExpansionModule,
  ],
})
export class BookingHistoryModule {}
