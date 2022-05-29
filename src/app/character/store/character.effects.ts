import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { CharacterService } from '../character.service';
import * as characterActions from './character.actions';

@Injectable()
export class CharacterEffects {
  findAllCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(characterActions.findAllCharacters),
      switchMap(() =>
        this.characterService.findAll().pipe(
          map((characters:any) =>
            characterActions.findAllCharactersSuccess({ characters:characters.results })
          ),
          catchError((error) =>
            of(characterActions.findAllCharactersFail({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
