import { Component, inject } from '@angular/core';
import { RoutePath } from 'src/app/app-routing.module';
import { ApiDataUrl, ApiRouterAdresses } from 'src/app/modules/api/config/api-adress';
import { ModuleCards } from 'src/app/modules/api/model/module-cards';
import { UserDashboardCard } from 'src/app/modules/api/model/user-dashboard-card';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
  selector: 'planet-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent {
  public UserDashboardCards: UserDashboardCard[] = [
    {
      id: 1,
      cardName: 'Twoi agenci do zadań specjalnych',
      buttonName: 'Zobacz agentów',
      cardData: 5
    },
    { id: 2, cardName: 'Twoje misje', buttonName: 'Sprawdź misje', cardData: 7 },
    { id: 3, cardName: 'Twoje bazy', buttonName: 'Zobacz więcej', cardData: 8 }
  ];
  public modulesCards: ModuleCards[] = [
    { id: 1, cardName: 'Zarządzanie misjami', cols: 1, rows: 1, router: RoutePath.MANAGE_MISSIONS },
    { id: 2, cardName: 'Adresy punktów specjalnych', cols: 1, rows: 1, router: RoutePath.SPECIAL_POINTS_ADRESSES },
    { id: 3, cardName: 'Teleportacja', cols: 1, rows: 1, router: RoutePath.TELEPORTATION },
    { id: 4, cardName: 'Eksport / Import', cols: 1, rows: 1, router: RoutePath.EXPORT_IMPORT }
  ];

  private readonly navigationSarvice: NavigationService = inject(NavigationService);

  public navigateToMissionsDashboard(): void {
    this.navigationSarvice.navigateToMissionsDashboard();
  }
}
