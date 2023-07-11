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
  id$ = this.router.paramMap.pipe(map((params) => params.get('id')));

  ngOnInit(): void {
    /*     // snapshot will never update value when staying on same view
    this.id = this.router.snapshot.params['id']; */
    // can check whether the expected params are in the route
    /* this.router.paramMap.subscribe((params) => {
      if (params.has('id')) {
        params.get('id');
      }
    }); */
    /*     this.router.params.subscribe((params) => {
      this.id = params['id'];
    }); */
  }
}
