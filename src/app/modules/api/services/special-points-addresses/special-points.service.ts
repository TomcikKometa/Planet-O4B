import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiSpecialPointsUrl } from '../../config/api-adress';
import { MissionTableData } from '../../model/mission-table-data';
import { SpecialPointsRequest } from '../../model/special-point-request';


@Injectable({
  providedIn: 'root'
})
export class SpecialPointsService {

  private readonly http: HttpClient = inject(HttpClient);
  
  public getAddressesData(): Observable<MissionTableData[]> {
    return this.http.get<MissionTableData[]>(ApiSpecialPointsUrl.ADDRESSES_SPECIAL_POINTS);
  }

  public postSpecialPointAddress(request: SpecialPointsRequest): Observable<void> {
    return this.http.post<void>(ApiSpecialPointsUrl.ADD_SPECIAL_POINTS_ADDRESS, { request });
  }
}
