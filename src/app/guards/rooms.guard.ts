import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

export const roomsGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.isAdmin;
};
