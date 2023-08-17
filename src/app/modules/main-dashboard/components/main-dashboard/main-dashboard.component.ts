import { Component, inject } from '@angular/core';
import { RoutePath } from 'src/app/app-routing.module';
import { ModuleCards } from 'src/app/modules/api/model/main-dashboard/module-cards';
import { UserDashboardCard } from 'src/app/modules/api/model/main-dashboard/user-dashboard-card';
import { NavigationService } from 'src/app/modules/core/services/navigation/navigation.service';

@Component({
  selector: 'planet-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent {
  public userDashboardCards: UserDashboardCard[] = [
    {
      id: 1,
      cardName: 'special_agents',
      buttonName: 'see_agents',
      cardData: 5,
    },
    { id: 2, cardName: 'your_missions', buttonName: 'check_missions', cardData: 7 },
    { id: 3, cardName: 'your_bases', buttonName: 'see_more', cardData: 8 }
  ];
  public modulesCards: ModuleCards[] = [
    { id: 1, cardName: 'manage_missions', cols: 1, rows: 1, router: RoutePath.MANAGE_MISSIONS, matIcon:'airplanemode_active' },
    { id: 2, cardName: 'special_points_addresses', cols: 1, rows: 1, router: RoutePath.SPECIAL_POINTS_ADRESSES, matIcon:'home'},
    { id: 3, cardName: 'teleportaion', cols: 1, rows: 1, router: RoutePath.TELEPORTATION, matIcon:'graphic_eq' },
    { id: 4, cardName: 'export-import', cols: 1, rows: 1, router: RoutePath.EXPORT_IMPORT, matIcon:'import_export' }
  ];

  private readonly navigationSarvice: NavigationService = inject(NavigationService);

  public navigateToMissionsDashboard(): void {
    this.navigationSarvice.navigateToMissionsDashboard();
  }
}
