export interface MissionTableData {
    codename: string;
    missionsDate: string;
    status: string;
    budget: string;
}

export interface MissionTableDataEdit extends MissionTableData {
 mission: MissionTableData;
 isEdit:boolean;
}