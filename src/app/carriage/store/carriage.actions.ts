import { createAction, props } from '@ngrx/store';
import { CarriageModel } from './carriage.model';

export enum CarriageActionTypes {
  getCarriagesStart = '[Carriages] get Start',
  getCarriagesEnd = '[Carriages] get End',
  getAllCarriagesStart = '[Carriages] getAll Start',
  getAllCarriagesEnd = '[Carriages] getAll End',
  getCarriagesForSiteStart = '[Carriages] getForSite Start',
  getCarriagesForSiteEnd = '[Carriages] getForSite End',
  createCarriageStart = '[Carriages] create Start',
  createCarriageEnd = '[Carriages] create End',
  updateCarriageStart = '[Carriages] update Start',
  updateCarriageEnd = '[Carriages] updateEnd',
  deleteCarriageStart = '[Carriages] deleteStart',
  deleteCarriageEnd = '[Carriages] deleteEnd',
}

export const getCarriagesStartAction = createAction(
  CarriageActionTypes.getCarriagesStart
);
export const getCarriagesEndAction = createAction(
  CarriageActionTypes.getCarriagesEnd,
  props<{ carriages: CarriageModel[] }>()
);
export const getAllCarriagesStartAction = createAction(
  CarriageActionTypes.getAllCarriagesStart
);
export const getAllCarriagesEndAction = createAction(
  CarriageActionTypes.getAllCarriagesEnd,
  props<{ carriages: CarriageModel[] }>()
);
export const getCarriagesForSiteStartAction = createAction(
  CarriageActionTypes.getCarriagesForSiteStart,
  props<{ id: number }>()
);
export const getCarriagesForSiteEndAction = createAction(
  CarriageActionTypes.getCarriagesForSiteEnd,
  props<{ carriages: CarriageModel[] }>()
);
export const createCarriageStartAction = createAction(
  CarriageActionTypes.createCarriageStart,
  props<{ carriage: CarriageModel }>()
);
export const createCarriageEndAction = createAction(
  CarriageActionTypes.createCarriageEnd
);
export const updateCarriageStartAction = createAction(
  CarriageActionTypes.updateCarriageStart,
  props<{ carriage: CarriageModel }>()
);
export const updateCarriageEndAction = createAction(
  CarriageActionTypes.updateCarriageEnd
);
export const deleteCarriageStartAction = createAction(
  CarriageActionTypes.deleteCarriageStart,
  props<{ carriageId: number }>()
);
export const deleteCarriageEndAction = createAction(
  CarriageActionTypes.deleteCarriageEnd
);
