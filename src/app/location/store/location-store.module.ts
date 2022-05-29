import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {  LocationEffects } from './location.effects';
import { reducer } from './location.reducer';
import { featureKey } from './location.state';

@NgModule({
  imports: [
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([LocationEffects])
  ]
})
export class LocationStoreModule { }
