import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { NavigationService } from '../../core/services/navigation/navigation.service';

@Component({
  selector: 'planet-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  private readonly navigationService: NavigationService = inject (NavigationService);

  public navigateToMainDashboard(): void {
    this.navigationService.navigateToMainDashboard();
  }
  
}
