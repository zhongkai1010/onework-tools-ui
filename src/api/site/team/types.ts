export interface GetListSearchParams {
  userName: string;
}

export interface SiteTeamPersonnel {
  userName: string;
}

export interface SiteProfessional {
  dempName: string;
}

export interface SetProfessionalData {
  professionalId: string;
}

export interface SetPIData {
  pi: string;
}

export interface CancelPIData {
  pi: string;
}

export interface ApplyJoinPersonnelRecord {
  uid: string;
}

export interface SearchApplyJoinRecordParams {
  userName: string;
}

export interface ReviewApplyData {
  uid: string;
}
