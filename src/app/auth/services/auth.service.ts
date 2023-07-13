import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/dtos/requests/login.request';
import { RegisterRequest } from 'src/dtos/requests/register.request';
import { LoginResponse } from 'src/dtos/response/login.response';
import { BaseHttpService } from 'src/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttpService {
  constructor() {
    super('auth');
  }

  public login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.getUrl('login'), data);
  }

  public register(data: RegisterRequest): Observable<boolean> {
    return this.http.post<boolean>(this.getUrl('register'), data);
  }
}
