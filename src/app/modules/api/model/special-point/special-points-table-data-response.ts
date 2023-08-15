import { PageResponseOptions } from '../page/page-response-options';
import { SpecialPointsTableData } from '../special-points-table-data';

export interface SpecialPointsTableDataResponse extends PageResponseOptions {
    data: SpecialPointsTableData[];
}