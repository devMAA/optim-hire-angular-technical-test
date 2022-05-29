import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharactersState, featureKey, adapter } from './character.state';
import * as characterActions from './character.actions';

const { selectEntities, selectAll } = adapter.getSelectors();

const getCharacterState = createFeatureSelector<CharactersState>(featureKey);

const selectCharacterEntities = createSelector(
  getCharacterState,
  selectEntities
);

const selectCharacterSensorId = createSelector(
  getCharacterState,
  (state: CharactersState) => state.selectedId
);

export const selectAllCharacters = createSelector(getCharacterState, selectAll);

export const selectCurrentCharacter = createSelector(
  selectCharacterEntities,
  selectCharacterSensorId,
  (userEntities, userId) => userId && userEntities[userId]
);
