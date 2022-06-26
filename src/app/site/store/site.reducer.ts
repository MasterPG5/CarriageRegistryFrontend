import { createReducer, on } from '@ngrx/store';
import {
  editSiteEndAction,
  editSiteStartAction,
  getSitesEndAction,
} from './site.actions';
import { SiteModel } from './site.model';

export const siteFeatureKey = 'siteFeature';

export interface SiteFeatureState {
  allSites: Array<SiteModel>;
  editedSite: SiteModel;
  isNew: boolean;
}

export const initialState: SiteFeatureState = {
  allSites: [],
  editedSite: undefined,
  isNew: true,
};

export const siteReducer = createReducer(
  initialState,
  on(getSitesEndAction, (state, { sites }) => ({ ...state, allSites: sites })),
  on(editSiteStartAction, (state, { siteId }) => ({
    ...state,
    editedSite: state.allSites.find((site) => site.id === siteId),
    isNew: false,
  })),
  on(editSiteEndAction, (state) => ({
    ...state,
    editedSite: undefined,
    isNew: true,
  }))
);
