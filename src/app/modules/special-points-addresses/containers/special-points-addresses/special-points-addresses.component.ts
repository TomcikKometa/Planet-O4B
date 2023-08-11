import { Component, inject, OnInit } from '@angular/core';
import { SpecialPointsService } from 'src/app/modules/api/services/special-points.service';
import { SideNavButtonComponent } from 'src/app/modules/share/side-nav-button/side-nav-button.component';

@Component({
  selector: 'planet-special-points-addresses',
  templateUrl: './special-points-addresses.component.html',
  styleUrls: ['./special-points-addresses.component.scss'],
  providers: [SideNavButtonComponent]
})
export class SpecialPointsAddressesComponent implements OnInit{
  public activeIndex: number = 0;
  public addresses:any[] = [];

  private readonly specialPointsService: SpecialPointsService = inject(SpecialPointsService);

  public ngOnInit(): any {
    this.specialPointsService.getAddressesData().subscribe((addresses: any) => {
      this.addresses = addresses;
    });
  }

  public setActiveIndex(index: number): void {
    this.activeIndex = index;
  }
}
