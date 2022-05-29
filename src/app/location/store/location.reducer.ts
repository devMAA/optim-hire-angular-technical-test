import { Action, createReducer, on } from '@ngrx/store';
import * as locationState from './location.state';
import * as locationActions from './location.actions';

const locationReducer = createReducer(
  locationState.initialstate,
  // SELECT ONE
  on(locationActions.SelectLocation, (state, { id }) => ({
    ...state,
    selectedId: id,
  })),
  // FIND ALL
  on(locationActions.findAllLocations, (state) => ({
    ...state,
    action: locationActions.type.FIND_ALL_LOCATIONS,
    loading: true,
    error: null,
  })),
  on(locationActions.findAllLocationsSuccess, (state, { locations }) => {
    return locationState.adapter.addMany(locations, {
      ...state,
      loading: false,
    });
  }),
  on(locationActions.findAllLocationsFail, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  }))
);

export function reducer(state: locationState.LocationsState, action: Action) {
  return locationReducer(state, action);
}
