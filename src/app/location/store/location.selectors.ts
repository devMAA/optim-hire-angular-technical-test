import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LocationsState, featureKey, adapter } from './location.state';
import * as locationActions from './location.actions';

const { selectEntities, selectAll } = adapter.getSelectors();

const getLocationState = createFeatureSelector<LocationsState>(featureKey);

const selectLocationEntities = createSelector(
  getLocationState,
  selectEntities
);

const selectLocationSensorId = createSelector(
  getLocationState,
  (state: LocationsState) => state.selectedId
);

export const selectAllLocations = createSelector(getLocationState, selectAll);

export const selectCurrentLocation = createSelector(
  selectLocationEntities,
  selectLocationSensorId,
  (userEntities, userId) => userId && userEntities[userId]
);
