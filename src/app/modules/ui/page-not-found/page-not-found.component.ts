import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { NavigationService } from '../../core/services/navigation/navigation.service';

@Component({
  selector: 'planet-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  standalone:true,
  imports: [CommonModule, TranslateModule],
  providers:[TranslateService]
})
export class PageNotFoundComponent {
  private readonly navigationService: NavigationService = inject(NavigationService);

  public navigateToMainDashboard(): void {
    this.navigationService.navigateToMainDashboard();
  }
}
