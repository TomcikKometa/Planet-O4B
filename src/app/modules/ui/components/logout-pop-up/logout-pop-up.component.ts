import { Component, inject, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';
import { StoreService } from 'src/app/modules/core/services/store/store.service';

@Component({
  selector: 'planet-logout-pop-up',
  templateUrl: './logout-pop-up.component.html',
  styleUrls: ['./logout-pop-up.component.scss']
})
export class LogoutPopUpComponent {
  private readonly storeService: StoreService = inject(StoreService);
  private readonly navigateService: NavigationService = inject(NavigationService);

  public logout(): void {
    this.storeService.logoutUser();
    this.navigateService.navigateToLoginPage();
  }
}
