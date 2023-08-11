import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiManageMissionUrl } from '../../config/api-adress';
import { MissisonRequest } from '../../model/misison-request';
import { MissionTableData } from '../../model/mission-table-data';

@Injectable({
  providedIn: 'root'
})
export class ManageMissionsService {
  private readonly http: HttpClient = inject(HttpClient);

  public getMisisionsData(): Observable<MissionTableData[]> {
    return this.http.get<MissionTableData[]>(ApiManageMissionUrl.MISSIONS);
  }

  public postMission(request: MissisonRequest): Observable<void> {
    return this.http.post<void>(ApiManageMissionUrl.POST_MISSION, { request });
  }
}
