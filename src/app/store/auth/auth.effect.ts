import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthStore } from './auth.store';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthStore.actions.login),
      mergeMap(({ data }) =>
        this.service.login(data).pipe(
          map((data) => AuthStore.mutators.logged({ data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthStore.actions.register),
      mergeMap(({ data }) =>
        this.service.register(data).pipe(
          map((data) => AuthStore.mutators.registered({ data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: AuthService) {}
}
