import {
  CanActivateChildFn,
  CanActivateFn,
  CanMatchFn,
  Router,
} from '@angular/router';
import { LoginService } from '../login/login.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.isLoggedIn ? true : router.navigate(['/login']);
};

export const roomsGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService = inject(LoginService);

  return loginService.isAdmin;
};

export const loginGuardMatch: CanMatchFn = (childRoute, state) => {
  const loginService = inject(LoginService);

  return loginService.isLoggedIn;
};
