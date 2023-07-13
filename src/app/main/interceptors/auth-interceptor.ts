import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/services/storage.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storaService: StorageService) {}
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.storaService.getLocalSession()?.accessToken;
    req = req.clone({
      withCredentials: true,
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req);
  }
}
