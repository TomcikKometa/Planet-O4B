import { MissionTableData } from 'src/app/modules/api/model/mission-table-data';
import { MissionTableDataMapper } from 'src/app/modules/api/model/mission-table-data-mapper';

export class MissionResponseMapper {

    public static map(mission: MissionTableData): MissionTableDataMapper {
        return {
            codename: mission.codename,
            budget: mission.budget,
            missionsDate: mission.missionsDate,
            status: mission.status,
            statusDisplay: this.mapStatus(mission.status),
        };
    }

    public  static mapStatus(status: string) :any{
        switch (status) {
            case status = '1': 
            return 'Przyszła';
            case status = '0': 
            return 'W trakcie';
            case status = '-1': 
            return 'Zrealizowana';
         }
    }
}
