import { Action, createReducer, on } from '@ngrx/store';
import * as characterState from './character.state';
import * as characterActions from './character.actions';

const characterReducer = createReducer(
  characterState.initialstate,
  // SELECT ONE
  on(characterActions.SelectCharacter, (state, { id }) => ({
    ...state,
    selectedId: id,
  })),
  // FIND ALL
  on(characterActions.findAllCharacters, (state) => ({
    ...state,
    action: characterActions.type.FIND_ALL_CHARACTERS,
    loading: true,
    error: null,
  })),
  on(characterActions.findAllCharactersSuccess, (state, { characters }) => {
    return characterState.adapter.addMany(characters, {
      ...state,
      loading: false,
    });
  }),
  on(characterActions.findAllCharactersFail, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  }))
);

export function reducer(state: characterState.CharactersState, action: Action) {
  return characterReducer(state, action);
}
