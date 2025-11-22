import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login/services/login.service';

export const authGuard: CanActivateFn = () => {
  console.log('GUARD EJECUTADO');
  const login = inject(LoginService);
  const router = inject(Router);

  if (login.isLoggedIn()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

