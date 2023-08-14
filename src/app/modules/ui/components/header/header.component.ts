import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

import { LogoutPopUpComponent } from '../logout-pop-up/logout-pop-up.component';

@Component({
  selector: 'planet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly navigationService: NavigationService = inject(NavigationService);
  private readonly dialog: MatDialog = inject(MatDialog);


  public navigateToMainDashboard(): void {
    this.navigationService.navigateToMainDashboard();
  }

  public logout(): void {
    this.dialog.open(LogoutPopUpComponent, {
      width: '450px',
      position: { top: '55px', right: '55px' },
      autoFocus: false
    });
  }

  
}
