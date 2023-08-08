import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from './modules/core/services/store/store.service';

@Component({
  selector: 'planet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly storeService: StoreService = inject(StoreService);

  public get isLoggedIn$(): Observable<boolean> {
    return this.storeService.isLoggedIn$;
  }
}
