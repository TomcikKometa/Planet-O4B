import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RoutePath } from './app-routing.module';
import { StoreService } from './modules/core/services/store/store.service';

@Component({
  selector: 'planet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showLayout: boolean = false;

  private readonly router: Router = inject(Router);
  private readonly storeService: StoreService = inject(StoreService);

  public ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showLayout = event.url !== `/${RoutePath.LOGIN}`;
      }
    });
  }

  public get isLoggedIn$(): Observable<boolean> {
    return this.storeService.isLoggedIn$;
  }
}
