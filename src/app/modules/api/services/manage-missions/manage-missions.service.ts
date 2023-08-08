import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiDataUrl } from '../../config/api-adress';
import { MissionTableData } from '../../model/mission-table-data';

@Injectable({
  providedIn: 'root'
})
export class ManageMissionsService {
  private readonly http: HttpClient = inject(HttpClient);

  public getMisisionsData(): Observable<MissionTableData[]> {
    return this.http.get<MissionTableData[]>(ApiDataUrl.MISSIONS);
  }
}
