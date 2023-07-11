import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent implements OnInit {
  id: string = '';

  constructor(private router: ActivatedRoute) {}

  // probably best method to get the data -> dont forget to put the async pipe in the html
  id$ = this.router.params.pipe(map((params) => params['id']));

  ngOnInit(): void {
    /*     // snapshot will never update value when staying on same view
    this.id = this.router.snapshot.params['id']; */
    /*     this.router.params.subscribe((params) => {
      this.id = params['id'];
    }); */
  }
}
