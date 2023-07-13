import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfigService } from '../services/config.service';
@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss'],
})
export class BookingHistoryComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private configService: ConfigService, private fb: FormBuilder) {}

  // Form could be designed like this -> has the advantage that the info is correctly formatted as json
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      bookingId: ['', Validators.required, Validators.email],
      roomId: new FormControl(
        { value: '2', disabled: true },
        { validators: [Validators.email] }
      ),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAdress: this.fb.group({
        guestCity: [''],
        guestState: [''],
        guestCountry: [''],
        guestZipCode: [''],
      }),
      guests: this.fb.array([1, 23, 2]),
    });
  }

  addGuest() {
    this.guests.push(this.fb.array([1, 23, 2]));
  }

  // so kann man neue Control zu dem Json oben hinzufügen
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  removePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
