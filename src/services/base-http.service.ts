import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class BaseHttpService {
  protected http = inject(HttpClient);
  constructor(private path: string) {}

  protected getUrl(path2?: string): string {
    return `http://${environment.server}/${this.path}${path2 ? '/' : ''}${
      path2 || ''
    }`;
  }
}
