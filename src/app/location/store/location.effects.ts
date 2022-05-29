import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { LocationService } from '../location.service';
import * as locationActions from './location.actions';

@Injectable()
export class LocationEffects {
  findAllLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(locationActions.findAllLocations),
      switchMap(() =>
        this.locationService.findAll().pipe(
          map((locations:any) =>
          locationActions.findAllLocationsSuccess({ locations:locations.results })
          ),
          catchError((error) =>
            of(locationActions.findAllLocationsFail({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private locationService: LocationService
  ) {}
}
