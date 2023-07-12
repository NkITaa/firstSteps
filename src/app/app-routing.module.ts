import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'employee', component: EmployeesComponent },
  { path: 'login', component: LoginComponent },

  // whenever someone is accessing rooms the person has to download the room module at run time -> im faster because main.js will be smaller
  {
    path: 'rooms',
    loadChildren: () =>
      import('./cars/rooms.module').then((m) => m.RoomsModule),
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'booking', loadChildren: () => import('./booking-history/booking-history.module').then(m => m.BookingHistoryModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
