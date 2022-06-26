export interface Site {
  id: number;
  name: string;
  owner: string;
  address: string;
  code: string;
  isDeleted: boolean;
}

export class SiteModel implements Site {
  id: number;
  name: string;
  owner: string;
  address: string;
  code: string;
  isDeleted: boolean;
}
