import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../app.module';
import { siteFeatureKey, SiteFeatureState } from './site.reducer';

export const selectFeature = createFeatureSelector<AppState, SiteFeatureState>(
  siteFeatureKey
);

export const selectAllSites = createSelector(
  selectFeature,
  (state: SiteFeatureState) => state.allSites
);

export const selectActiveSites = createSelector(
  selectFeature,
  (state: SiteFeatureState) => state.allSites.filter((site) => !site.isDeleted)
);

export const selectEditedSite = createSelector(
  selectFeature,
  (state: SiteFeatureState) => state.editedSite
);

export const selectIsNew = createSelector(
  selectFeature,
  (state: SiteFeatureState) => state.isNew
);
