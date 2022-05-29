import { createAction, props } from '@ngrx/store';
import { Character } from '../character';

export enum type {
  SELECT_CHARACTER = '[ Character ] Select a Character',
  FIND_ALL_CHARACTERS = '[ Character ] Find All Characters',
  FIND_ALL_CHARACTERS_FAIL = '[ Character ] Find All Characters Fail',
  FIND_ALL_CHARACTERS_SUCCESS = '[ Character ] Find All Characters Success',
}

export const SelectCharacter = createAction(
  type.SELECT_CHARACTER,
  props<{ id: string }>()
);
export const findAllCharacters = createAction(type.FIND_ALL_CHARACTERS);
export const findAllCharactersFail = createAction(
  type.FIND_ALL_CHARACTERS_FAIL,
  props<{ error: any }>()
);
export const findAllCharactersSuccess = createAction(
  type.FIND_ALL_CHARACTERS_SUCCESS,
  props<{ characters: Array<Character> }>()
);
