import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { EpisodeService } from '../episode.service';
import * as episodeActions from './episode.actions';

@Injectable()
export class EpisodeEffects {
  findAllEpisode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(episodeActions.findAllEpisodes),
      switchMap(() =>
        this.episodeService.findAll().pipe(
          map((episodes:any) =>
          episodeActions.findAllEpisodesSuccess({ episodes:episodes.results })
          ),
          catchError((error) =>
            of(episodeActions.findAllEpisodesFail({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private episodeService: EpisodeService
  ) {}
}
