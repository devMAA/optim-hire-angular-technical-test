import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Character } from '../character';

export const adapter = createEntityAdapter<Character>({
  selectId: (sensor: Character) => sensor.id,
  sortComparer: false,
});

export interface CharactersState extends EntityState<Character> {
  selectedId: string | null;
  action: string | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialstate: CharactersState = adapter.getInitialState({
  selectedId: null,
  action: null,
  loading: false,
  loaded: false,
  error: null,
});

export const featureKey = 'characters';
