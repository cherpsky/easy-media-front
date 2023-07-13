import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthStore } from 'src/app/store/auth/auth.store';
import { LoginResponse } from 'src/dtos/response/login.response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private store: Store) {}

  getLocalSession(): LoginResponse | undefined {
    const data = localStorage.getItem(environment.loginData);
    if (data) return JSON.parse(data) as LoginResponse;
    return;
  }

  setLocalSession(response: LoginResponse): void {
    localStorage.setItem(environment.loginData, JSON.stringify(response));
  }

  clearLocalSession(): void {
    localStorage.removeItem(environment.loginData);
    this.store.dispatch(AuthStore.mutators.clearSession());
  }
}
