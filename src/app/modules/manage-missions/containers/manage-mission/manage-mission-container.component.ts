import { Component, inject, OnInit } from '@angular/core';
import { MissionTableData } from 'src/app/modules/api/model/mission-table-data';
import { ManageMissionsService } from 'src/app/modules/api/services/manage-missions/manage-missions.service';

@Component({
  selector: 'planet-manage-mission',
  templateUrl: './manage-mission-container.component.html',
  styleUrls: ['./manage-mission-container.component.scss']
})
export class ManageMissionContainerComponent implements OnInit {
  public blankMissinData = true;
  public showMissions = false;
  public isSpinner = false;
  public hide = false;
  public missions: MissionTableData[] = [];
  public activeIndex: number = 0;

  private readonly manageMissionsService: ManageMissionsService = inject(ManageMissionsService);

  public ngOnInit(): void {
    this.blankMissinData;
  }

  public showMisisonData(): void {
    this.blankMissinData = false;
    this.isSpinner = true;
    this.manageMissionsService.getMisisionsData().subscribe((missions: MissionTableData[]) => {
      this.missions = missions;
    });
    setTimeout(() => {
      this.isSpinner = false;
      this.showMissions = true;
      this.hide = true;
    }, 3000);
  }

  public setActiveIndex(index: number): void {
    this.activeIndex = index;
  }
}
