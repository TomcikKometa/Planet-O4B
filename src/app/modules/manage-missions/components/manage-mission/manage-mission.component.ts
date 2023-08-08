import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planet-manage-mission',
  templateUrl: './manage-mission.component.html',
  styleUrls: ['./manage-mission.component.scss']
})
export class ManageMissionComponent implements OnInit {
  public blankMissinData = true;
  public showMissions = false;
  public isSpinner = false;
  public hide = false;
  constructor() {}

  public ngOnInit(): void {
    this.blankMissinData;
  }

  public showMisisonData(): void {
    this.blankMissinData = false;
    this.isSpinner = true;
    setTimeout(() => {
      this.isSpinner = false;
      this.showMissions = true;
      this.hide = true;
    }, 3000);
  }
}
