import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthStore } from 'src/app/store/auth/auth.store';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  menuOpen = false;
  user$ = this.store.select(AuthStore.selectors.user);
  constructor(private storageService: StorageService, private store: Store) {}

  ngOnInit() {}

  logout() {
    this.storageService.clearLocalSession();
  }
}
