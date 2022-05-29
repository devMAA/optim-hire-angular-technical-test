import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Episode } from '../episode';

export const adapter = createEntityAdapter<Episode>({
  selectId: (sensor: Episode) => sensor.id,
  sortComparer: false,
});

export interface EpisodesState extends EntityState<Episode> {
  selectedId: string | null;
  action: string | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialstate: EpisodesState = adapter.getInitialState({
  selectedId: null,
  action: null,
  loading: false,
  loaded: false,
  error: null,
});

export const featureKey = 'episodes';
