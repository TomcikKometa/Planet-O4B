import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiSpecialPointsUrl } from '../../config/api-adress';
import { PageRequestOptions } from '../../model/page/page-request-options';
import { SpecialPointsTableDataResponse } from '../../model/special-point/special-points-table-data-response';
import { SpecialPointsRequest } from '../../model/special-point-request';

@Injectable({
  providedIn: 'root'
})
export class SpecialPointsService {
  private readonly http: HttpClient = inject(HttpClient);

  public getAddressesData(requestOptions: PageRequestOptions): Observable<SpecialPointsTableDataResponse> {
    return this.http.get<SpecialPointsTableDataResponse>(ApiSpecialPointsUrl.ADDRESSES_SPECIAL_POINTS, {
      params: { ...requestOptions }
    });
  }

  public postSpecialPointAddress(request: SpecialPointsRequest): Observable<void> {
    return this.http.post<void>(ApiSpecialPointsUrl.ADD_SPECIAL_POINTS_ADDRESS, { request });
  }
}
