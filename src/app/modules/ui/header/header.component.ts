import { Component, inject, OnInit } from '@angular/core';

import { NavigationService } from '../../core/services/navigation/navigation.service';

@Component({
  selector: 'planet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly navigationService: NavigationService = inject(NavigationService);

  public navigateToMainDashboard(): void {
    this.navigationService.navigateToMainDashboard();
  }
}
