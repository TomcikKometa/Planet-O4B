import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiManageMissionUrl, ApiSpecialPointsUrl } from '../config/api-adress';
import { MissionTableData } from '../model/mission-table-data';

@Injectable({
  providedIn: 'root'
})
export class SpecialPointsService {

  private readonly http: HttpClient = inject(HttpClient);
  
  public getAddressesData(): Observable<MissionTableData[]> {
    return this.http.get<MissionTableData[]>(ApiSpecialPointsUrl.ADDRESSES_SPECIAL_POINTS);
  }
}
