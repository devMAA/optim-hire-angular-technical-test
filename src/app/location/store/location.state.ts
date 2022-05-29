import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Location } from '../location';

export const adapter = createEntityAdapter<Location>({
  selectId: (sensor: Location) => sensor.id,
  sortComparer: false,
});

export interface LocationsState extends EntityState<Location> {
  selectedId: string | null;
  action: string | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialstate: LocationsState = adapter.getInitialState({
  selectedId: null,
  action: null,
  loading: false,
  loaded: false,
  error: null,
});

export const featureKey = 'locations';
