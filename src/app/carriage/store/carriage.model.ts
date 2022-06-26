export interface Carriage {
  id: number;
  seriesCode: string;
  wagonNumber: string;
  yearConstructed: number;
  siteId: number;
  owner: string;
  isDeleted: boolean;
  deletedDate?: Date;
}

export class CarriageModel implements Carriage {
  id: number;
  seriesCode: string;
  wagonNumber: string;
  yearConstructed: number;
  siteId: number;
  owner: string;
  isDeleted: boolean;
  deletedDate?: Date;
}
