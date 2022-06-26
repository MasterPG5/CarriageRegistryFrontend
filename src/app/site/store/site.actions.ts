import { createAction, props } from '@ngrx/store';
import { SiteModel } from './site.model';

export enum SiteActionTypes {
  getSitesStart = '[Sites] get Start',
  getSitesEnd = '[Sites] get End',
  createSiteStart = '[Sites] create Start',
  createSiteEnd = '[Sites] create End',
  editSiteStart = '[Sites] edit Start',
  editSiteEnd = '[Sites] edit End',
  updateSiteStart = '[Sites] update Start',
  updateSiteEnd = '[Sites] updateEnd',
  deleteSiteStart = '[Sites] deleteStart',
  deleteSiteEnd = '[Sites] deleteEnd',
}

export const getSitesStartAction = createAction(SiteActionTypes.getSitesStart);
export const getSitesEndAction = createAction(
  SiteActionTypes.getSitesEnd,
  props<{ sites: SiteModel[] }>()
);
export const createSiteStartAction = createAction(
  SiteActionTypes.createSiteStart,
  props<{ site: SiteModel }>()
);
export const createSiteEndAction = createAction(SiteActionTypes.createSiteEnd);
export const editSiteStartAction = createAction(
  SiteActionTypes.editSiteStart,
  props<{ siteId: number }>()
);
export const editSiteEndAction = createAction(SiteActionTypes.editSiteEnd);
export const updateSiteStartAction = createAction(
  SiteActionTypes.updateSiteStart,
  props<{ site: SiteModel }>()
);
export const updateSiteEndAction = createAction(SiteActionTypes.updateSiteEnd);
export const deleteSiteStartAction = createAction(
  SiteActionTypes.deleteSiteStart,
  props<{ siteId: number }>()
);
export const deleteSiteEndAction = createAction(SiteActionTypes.deleteSiteEnd);
