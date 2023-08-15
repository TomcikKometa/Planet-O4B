import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

import { LanguagePopUpComponent } from '../language-pop-up/language-pop-up.component';
import { LogoutPopUpComponent } from '../logout-pop-up/logout-pop-up.component';

@Component({
  selector: 'planet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly isPolishFlag: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public readonly isEnglishFlag: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private readonly navigationService: NavigationService = inject(NavigationService);
  private readonly dialog: MatDialog = inject(MatDialog);

  public navigateToMainDashboard(): void {
    this.navigationService.navigateToMainDashboard();
  }

  public logout(): void {
    this.dialog.open(LogoutPopUpComponent, {
      width: '450px',
      position: { top: '55px', right: '70px' },
      autoFocus: false
    });
  }

  public changeLanguagePopUp(): void {
    let dialog = this.dialog.open(LanguagePopUpComponent, {
      width: '350px',
      position: { top: '55px', right: '20px' },
      autoFocus: false
    });

    dialog.afterClosed().subscribe((result: string) => {
      if (result === 'en') {
        this.isEnglishFlag.next(true);
        this.isPolishFlag.next(false);
      }
      if (result === 'pl') {
        this.isEnglishFlag.next(false);
        this.isPolishFlag.next(true);
      }
    });
  }
}
