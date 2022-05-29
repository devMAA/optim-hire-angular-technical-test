import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {  EpisodeEffects } from './episode.effects';
import { reducer } from './episode.reducer';
import { featureKey } from './episode.state';

@NgModule({
  imports: [
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([EpisodeEffects])
  ]
})
export class EpisodeStoreModule { }
