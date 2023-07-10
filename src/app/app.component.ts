import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(@Inject(LocalStorageToken) private localStorage: Storage) {}

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Nikita');
  }
}
