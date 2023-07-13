import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthStore } from './store/auth/auth.store';
import { Router } from '@angular/router';
import { AppModules } from 'src/enum/app-modules.enum';
import { MainRoutes } from 'src/enum/main-routes.enum';
import { StorageService } from 'src/services/storage.service';
import { AuthRoutes } from 'src/enum/auth-routes.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.observeLoginStatus();
    this.checkLoginStatus();
  }

  private checkLoginStatus() {
    const localSession = this.storage.getLocalSession();
    if (localSession)
      this.store.dispatch(AuthStore.mutators.logged({ data: localSession }));
  }

  private observeLoginStatus() {
    this.store.select(AuthStore.selectors.isLogged).subscribe((logged) => {
      if (logged) this.router.navigate([AppModules.MAIN, MainRoutes.POSTS]);
      else this.router.navigate([AppModules.AUTH, AuthRoutes.LOGIN]);
    });
  }
}
