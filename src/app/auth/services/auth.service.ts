import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/dtos/requests/login.request';
import { RegisterRequest } from 'src/dtos/requests/register.request';
import { LoginResponse } from 'src/dtos/response/login.response';
import { BaseHttpService } from 'src/services/base-http.service';
import { StorageService } from 'src/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseHttpService {
  constructor(private storage: StorageService) {
    super('auth');
  }

  public login(data: LoginRequest): Observable<LoginResponse> {
    const response = this.http.post<LoginResponse>(this.getUrl('login'), data);
    response.subscribe((data) => this.storage.setLocalSession(data));
    return response;
  }

  public register(data: RegisterRequest): Observable<boolean> {
    return this.http.post<boolean>(this.getUrl('register'), data);
  }
}
