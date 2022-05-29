import { createAction, props } from '@ngrx/store';
import { Location } from '../location';

export enum type {
  SELECT_LOCATION = '[ Location ] Select a Location',
  FIND_ALL_LOCATIONS = '[ Location ] Find All Episodes',
  FIND_ALL_LOCATIONS_FAIL = '[ Location ] Find All Locations Fail',
  FIND_ALL_LOCATIONS_SUCCESS = '[ Location ] Find All Locations Success',
}

export const SelectLocation = createAction(
  type.SELECT_LOCATION,
  props<{ id: string }>()
);
export const findAllLocations = createAction(type.FIND_ALL_LOCATIONS);
export const findAllLocationsFail = createAction(
  type.FIND_ALL_LOCATIONS_FAIL,
  props<{ error: any }>()
);
export const findAllLocationsSuccess = createAction(
  type.FIND_ALL_LOCATIONS_SUCCESS,
  props<{ locations: Array<Location> }>()
);
